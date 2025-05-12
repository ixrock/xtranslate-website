// Allow imports inline SVG (base64 URIs) in TypeScript

declare module '*.svg?url' {
  const src: string;
  export default src;
}