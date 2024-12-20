// Helper to get correct image dimensions when resizing

export interface ResizeBy {
  width: number;
  height: number;
  newSize: number;
}

export function resizeByWidth({ width, height, newSize }: ResizeBy): [number, number] {
  const k = width / height;
  const newWidth = Math.min(width, newSize);
  const newHeight = Math.round(newWidth * k);

  return [newWidth, newHeight];
}

export function resizeByHeight({ width, height, newSize }: ResizeBy): [number, number] {
  const k = height / width;
  const newHeight = Math.min(width, newSize);
  const newWidth = Math.round(newHeight * k);

  return [newWidth, newHeight];
}
