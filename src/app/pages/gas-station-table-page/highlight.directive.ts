import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() searchedWord!: string; // searchText
  @Input() content!: string; // HTML content
  @Input() classToApply!: string; //class to apply for highlighting

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }

    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.content);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }

  getFormattedText() {
    const re = new RegExp(`(${this.searchedWord.trim()})`, 'gi');
    return this.content.replace(re, `<span class="${this.classToApply}">$1</span>`);
  }
}

