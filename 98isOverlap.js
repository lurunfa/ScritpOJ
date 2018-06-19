const isOverlap = (rect1, rect2) => {
    const conditionOne = rect1.x > rect2.x + rect2.width || rect1.y > rect2.y + rect2.height;
    const conditionTwo = rect1.x + rect1.width < rect2.x || rect1.y + rect1.height < rect2.y;
    return !(conditionOne || conditionTwo)
}