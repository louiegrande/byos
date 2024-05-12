export function dragElement(element: HTMLElement) {
  let xPos: number;
  let yPos: number;
  let xDistance: number;
  let yDistance: number;

  element.onmousedown = dragMousedown;
  
  function dragMousedown(e: MouseEvent): void {
    e.preventDefault();

    xPos = e.clientX;
    yPos = e.clientY;

    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }
  
  function elementDrag(e: MouseEvent): void {
    e.preventDefault();

    xDistance = xPos - e.clientX;
    yDistance = yPos - e.clientY;
    xPos = e.clientX;
    yPos = e.clientY;

    element.style.top = (element.offsetTop - yDistance) + "px";
    element.style.left = (element.offsetLeft - xDistance) + "px";
  }

  function closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
