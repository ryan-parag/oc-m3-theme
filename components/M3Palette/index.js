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
    
    return(
        <>
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