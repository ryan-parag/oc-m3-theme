import Swatch from "@/components/Swatch";
import Collapse from "@/components/Collapse";

const M3Palette = ({ palette, company }) => {

    const getPalette = () => {

        const themeObj = [];
        const themeScales = Object.keys(palette);
        const themeScalesCount = themeScales.length;
        const themeColors = Object.values(palette);
    
        const createScale = (x) => {
          const scale = []
          const colorNames = Object.keys(x);
          const colorArr = Object.values(x);
    
          for (let i = 0; i < colorNames.length; i++) {
            const color = {
              name: colorNames[i],
              value: colorArr[i]
            }
            scale.push(color)
          }
    
          return(scale)
        }
    
        for (let i = 0; i < themeScalesCount; i++) {
          const paletteItem = {
            name: themeScales[i],
            colors: createScale(themeColors[i])
          }
          themeObj.push(paletteItem)
        }
    
        return themeObj;
      }
    
      const data = JSON.stringify(palette);
      const blob = new Blob([data], { type: "application/json" });
      const jsonObjectUrl = URL.createObjectURL(blob);
      const filename = `${company}-m3-palette.json`;
    
    return(
        <>
            <header className="flex items-center w-full mb-4">
                <h1 className="text-headline-medium font-bold w-full flex-1">Material 3 Color Scales</h1>
                <a
                    className="transition border border-outline-variant px-4 py-2 rounded-lg bg-transparent dark:hover:bg-neutral-20 hover:bg-neutral-95"
                    href={jsonObjectUrl}
                    download={filename}
                    >
                    Export JSON
                </a>
            </header>
            <div className="rounded-lg border border-outline-variant overflow-hidden">
                {
                getPalette().map((item, i) => (
                    <Collapse title={`${item.name} (${item.colors.length})`} key={i}>
                    <div className="grid grid-cols-6 gap-2">
                        {
                        item.colors.map((color, i) => (
                            <Swatch
                              key={i}
                              name={color.name}
                              value={color.value}
                            />
                        ))
                        }
                    </div>
                    </Collapse>
                ))
                }
            </div>
        </>
    )
}

export default M3Palette;