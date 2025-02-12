import Swatch from "@/components/Swatch";
import Collapse from "@/components/Collapse";

const Row = ({ section }) => {

    const createSwatchArr = (section) => {
        const swatches = [];
        const swatchNames = Object.keys(section);
        const swatchValues = Object.values(section);

        for (let i = 0; i < Object.keys(section).length; i++) {
            const color = {
              name: swatchNames[i],
              value: swatchValues[i]
            }
            swatches.push(color)
        }

        return(swatches)
    }

    return(
        <>
            <div className="grid grid-cols-6 gap-2">
                {
                createSwatchArr(section).map((color, i) => (
                    <Swatch
                        key={i}
                        name={color.name}
                        value={color.value}
                    />
                ))
                }
            </div>
        </>
    )
}

const M2Palette = ({ palette, company }) => {

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
            section: createScale(themeColors[i])
          }
          themeObj.push(paletteItem)
        }
    
        return themeObj;
      }

    return(
        <div>
            {
                getPalette(palette).map((item, i) => (
                    <div className="mb-4"  key={i}>
                        <div className="text-label-large text-on-surface-variant capitalize mb-2">
                            {item.name}
                        </div>
                        <div className="rounded-lg border border-outline-variant overflow-hidden">
                            {
                                item.section.map((section, i) => (
                                    <Collapse key={i} title={`${section.name} (${Object.keys(section.value).length})`}>
                                        <Row section={section.value} />
                                    </Collapse>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default M2Palette;