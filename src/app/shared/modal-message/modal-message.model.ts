export enum ModalTypes {
    error,
    warning,
    success

}

export interface ModalMessageModel {
    header?: string; //Title text of the dialog.
    draggable?:boolean; // Enables dragging to change the position using header.
    keepInViewport?:boolean; //Keeps dialog in the viewport.
    resizable?: boolean; //Enables resizing of the content.
    visible?: boolean; //Specifies the visibility of the dialog.
    modal?: boolean; //Defines if background should be blocked when dialog is displayed.
    position?:	string; //Position of the dialog, options are "center", "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" or "bottom-right".
    blockScroll?: boolean; //Whether background scroll should be blocked when dialog is visible.
    closeOnEscape?: boolean; //Specifices if pressing escape key should hide the dialog.
    dismissableMask?: boolean; //	Specifices if clicking the modal background should hide the dialog.
    rtl?: boolean; //When enabled dialog is displayed in RTL direction.
    closable?: boolean; //	Adds a close icon to the header to hide the dialog.
    appendTo?: any; //	Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
    style?: object; //	Inline style of the component.
    styleClass?: string; //	Style class of the component.
    maskStyleClass?: string; //	Style class of the mask.
    contentStyle?: object; //	Inline style of the content.
    contentStyleClass?: string; //	Style class of the content.
    showHeader?: boolean; //	Whether to show the header or not.
    baseZIndex?: number; //	Base zIndex value to use in layering.
    autoZIndex?: boolean; //	Whether to automatically manage layering.
    minX?: number; //	Minimum value for the left coordinate of dialog in dragging.
    minY?: number; //	Minimum value for the top coordinate of dialog in dragging.
    focusOnShow?: boolean; //	When enabled, first button receives focus on show.
    focusTrap?: boolean; //	When enabled, can only focus on elements inside the dialog.
    maximizable?: boolean; //	Whether the dialog can be displayed full screen.
    breakpoints?: object; //	Object literal to define widths per screen size.
    transitionOptions?: string; // cubic-bezier(0, 0, 0.2, 1)	Transition options of the animation.
    closeIcon?: string; // pi-times	Name of the close icon.
    minimizeIcon?: string; // pi-window-minimize	Name of the minimize icon.
    maximizeIcon?: string; // pi-window-maximize	Name of the maximize icon.
    message?: string;
}