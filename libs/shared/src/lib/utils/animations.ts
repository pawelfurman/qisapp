import { animation, style, sequence, animate } from "@angular/animations"

export const showListItem = animation([
    style({ opacity: 0, height: 0 }),
    sequence([
      animate('{{time}}', style({height: '*' })),
      animate('{{time}}', style({opacity: 1 })),
    ]),
  ])
  
export const hideListItem = animation([
    style({ opacity: 0, height: '*' }),
    animate('{{time}}', style({ opacity: 0 , height: 0})),
  ])