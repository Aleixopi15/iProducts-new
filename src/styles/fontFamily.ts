export const Inter = {
    regular: "Inter_400Regular",
    bold: "Inter_700Bold",
    medium: "Inter_500Medium",
  };
  
  export const Rounded = {
    regular: "MPLUSRounded1c_400Regular",
    medium: "MPLUSRounded1c_500Medium",
    bold: "MPLUSRounded1c_700Bold",
    extrabold: "MPLUSRounded1c_900Black",
  };
  
  type FontFamilies = {
    [fontFamily: string]: {
      [fontWeight: string]: string;
    };
  };
  
  const fonts: FontFamilies = {
    inter: Inter,
    rounded: Rounded,
  };
  
  function generateFontKeys(fonts: FontFamilies) {
    const fontKeys: { [key: string]: string } = {};
    for (const [fontFamily, fontWeights] of Object.entries(fonts)) {
      for (const [fontWeight, fontName] of Object.entries(fontWeights)) {
        fontKeys[`${fontFamily}-${fontWeight}`] = fontName;
      }
    }
    return fontKeys;
  }
  
  export const fontFamily = generateFontKeys(fonts);