interface JBMakeMap {
  ShowGPX: (files: string[], type: string) => void;
  Rescale: () => void;
}

interface JBGPX2GM {
  start: () => void;
  autoload: boolean;
  Path: string;
  ver: string;
  [key: string]: unknown;
}

interface JBIconDef {
  icon: {
    anchor: { x: number; y: number };
    url: string;
    scaledSize: { width: number; height: number; widthUnit: string; heightUnit: string };
    size: { width: number; height: number; widthUnit: string; heightUnit: string };
  };
}

interface JBNamespace {
  GPX2GM: JBGPX2GM;
  makeMap: new (id: string) => JBMakeMap;
  icons: Record<string, JBIconDef>;
  [key: string]: unknown;
}

interface Window {
  JB?: JBNamespace;
}
