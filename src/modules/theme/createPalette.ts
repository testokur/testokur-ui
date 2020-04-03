export interface Palette {
  primary: string;
  secondary: string;
  inkLighter: string;
  inkLight: string;
  cloudNormal: string;
  blueNormal: string;
  blueDark: string;
}

export type PaletteInput = {
  +readonly [K in keyof Palette]+?: Palette[K];
};

const createPalette = (palette: PaletteInput): Palette => {
  const {
    primary = '#15A5EF',
    secondary = '#051CA1',
    inkLighter = '#BAC7D5',
    inkLight = '#5F738C',
    cloudNormal = '#EFF2F5',
    blueNormal = '#0172CB',
    blueDark = '#005AA3',
  } = palette;

  return {
    primary,
    secondary,
    inkLighter,
    inkLight,
    cloudNormal,
    blueNormal,
    blueDark,
  };
};

export default createPalette;