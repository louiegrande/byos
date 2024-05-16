export function dragElement(element: HTMLElement) {
  let xPos: number;
  let yPos: number;
  let xOffset: number = 0;
  let yOffset: number = 0;
  let xDistance: number;
  let yDistance: number;

  if (document.getElementById(element.id + "-header") !== null) {
    document.getElementById(element.id + "-header").onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  }
  
  function dragMouseDown(e: MouseEvent): void {
    e.preventDefault();

    yPos = e.clientY - yOffset;
    xPos = e.clientX - xOffset;

    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }
  
  function elementDrag(e: MouseEvent): void {
    e.preventDefault();
    const container: HTMLElement = element.parentElement;
    const containerRect: DOMRect = container.getBoundingClientRect();
    const elementRect: DOMRect = element.getBoundingClientRect();


    xDistance =  e.clientX - xPos;
    yDistance =  e.clientY - yPos;
    
    const maxX = containerRect.width - elementRect.width;
    const maxY = containerRect.height - elementRect.height;

    xDistance = Math.max(0, Math.min(xDistance, maxX));
    yDistance = Math.max(0, Math.min(yDistance, maxY));

    element.style.transform = `translate(${xDistance}px, ${yDistance}px)` 

    xOffset = xDistance;
    yOffset = yDistance;
  }

  function closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
