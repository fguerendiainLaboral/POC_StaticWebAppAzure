import { Component, Input, OnInit } from '@angular/core';
import { ModalMessageModel, ModalTypes } from './modal-message.model';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.scss']
})
export class ModalMessageComponent implements OnInit {

  @Input() modalType: ModalMessageModel
  @Input() modalData: ModalMessageModel

  constructor() { }

  ngOnInit(): void {



  }

  setModalType(type: ModalTypes){
    switch(type){
      case ModalTypes.success : {
        break;
      }
    }
  }

  setDataSuccess(){
    this.modalData.header; //Title text of the dialog.
    this.modalData.draggable; // Enables dragging to change the position using header.
    this.modalData.keepInViewport; //Keeps dialog in the viewport.
    this.modalData.resizable; //Enables resizing of the content.
    this.modalData.visible; //Specifies the visibility of the dialog.
    this.modalData.modal; //Defines if background should be blocked when dialog is displayed.
    this.modalData.position; //Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".
    this.modalData.blockScroll; //Whether background scroll should be blocked when dialog is visible.
    this.modalData.closeOnEscape; //Specifices if pressing escape key should hide the dialog.
    this.modalData.dismissableMask; //	Specifices if clicking the modal background should hide the dialog.
    this.modalData.rtl; //When enabled dialog is displayed in RTL direction.
    this.modalData.closable; //	Adds a close icon to the header to hide the dialog.
    this.modalData.appendTo; //	Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
    this.modalData.style; //	Inline style of the component.
    this.modalData.styleClass; //	Style class of the component.
    this.modalData.maskStyleClass; //	Style class of the mask.
    this.modalData.contentStyle; //	Inline style of the content.
    this.modalData.contentStyleClass; //	Style class of the content.
    this.modalData.showHeader; //	Whether to show the header or not.
    this.modalData.baseZIndex; //	Base zIndex value to use in layering.
    this.modalData.autoZIndex; //	Whether to automatically manage layering.
    this.modalData.minX; //	Minimum value for the left coordinate of dialog in dragging.
    this.modalData.minY; //	Minimum value for the top coordinate of dialog in dragging.
    this.modalData.focusOnShow; //	When enabled, first button receives focus on show.
    this.modalData.focusTrap; //	When enabled, can only focus on elements inside the dialog.
    this.modalData.maximizable; //	Whether the dialog can be displayed full screen.
    this.modalData.breakpoints; //	Object literal to define widths per screen size.
    this.modalData.transitionOptions; // cubic-bezier(0, 0, 0.2, 1)	Transition options of the animation.
    this.modalData.closeIcon; // pi-times	Name of the close icon.
    this.modalData.minimizeIcon; // pi-window-minimize	Name of the minimize icon.
    this.modalData.maximizeIcon; // pi-window-maximize	Name of the maximize icon.  
    this.modalData.message;}
    
    closeModal(){

  }; 

}
