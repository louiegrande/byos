export function dragElement(element: HTMLElement) {
  const container: HTMLElement = element.parentElement;
  const containerRect: DOMRect = container.getBoundingClientRect();
  const elementRect: DOMRect = element.getBoundingClientRect();
  let xPos: number;
  let yPos: number;
  let xOffset: number = 0;
  let yOffset: number = 0;
  let xDistance: number;
  let yDistance: number;

  element.onmousedown = dragMouseDown;
  
  function dragMouseDown(e: MouseEvent): void {
    e.preventDefault();

    xPos = (((e.clientX - containerRect.left) * 100) / containerRect.width) - xOffset;
    yPos = (((e.clientY - containerRect.top) * 100) / containerRect.height) - yOffset;

    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }
  
  function elementDrag(e: MouseEvent): void {
    e.preventDefault();


    xDistance = (((e.clientX - containerRect.left) * 100) / containerRect.width) - xPos;
    yDistance = (((e.clientY - containerRect.top) * 100) / containerRect.height) - yPos;
    
    const maxX = ((containerRect.width - elementRect.width) * 100) / containerRect.width;
    const maxY = ((containerRect.height - elementRect.height) * 100) / containerRect.height;

    xDistance = Math.max(0, Math.min(xDistance, maxX));
    yDistance = Math.max(0, Math.min(yDistance, maxY));

    element.style.left = `${xDistance}%` 
    element.style.top = `${yDistance}%` 

    xOffset = xDistance;
    yOffset = yDistance;
  }

  function closeDragElement(): void {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
