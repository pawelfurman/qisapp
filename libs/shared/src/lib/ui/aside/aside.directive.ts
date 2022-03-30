import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[qisAsideLink]'
})
export class AsideLinkDirective{
    public linkTemplate!: TemplateRef<any>

    constructor(private templateRef: TemplateRef<any>){
        this.linkTemplate = this.templateRef
    }
} 