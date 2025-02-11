import Collapse from "../Collapse"
import React, { useState } from 'react'
import TokenBlock from "../TokenBlock";

const M2Schemes = ({ theme, mode }) => {

    return(
        <Collapse title={`${mode}`}>
            <div className="grid grid-cols-6 gap-2">
                <span className="col-span-6">Masonite</span>
                <TokenBlock color={theme.masonite.main} text={theme.text.contrast}>masonite.main</TokenBlock>
                <TokenBlock color={theme.masonite.light} text={theme.text.default}>masonite.light</TokenBlock>
                <TokenBlock color={theme.masonite.dark} text={theme.text.contrast}>masonite.dark</TokenBlock>
                <TokenBlock color={theme.masonite.muted} text={theme.text.default}>masonite.muted</TokenBlock>
                <TokenBlock color={theme.masonite.text} text={theme.text.contrast}>masonite.text</TokenBlock>
                <TokenBlock color={theme.masonite.card} text={theme.text.default}>masonite.card</TokenBlock>
                <span className="col-span-6">Advisar</span>
                <TokenBlock color={theme.advisar.main} text={theme.text.contrast}>advisar.main</TokenBlock>
                <TokenBlock color={theme.advisar.light} text={theme.text.default}>advisar.light</TokenBlock>
                <TokenBlock color={theme.advisar.dark} text={theme.text.contrast}>advisar.dark</TokenBlock>
                <TokenBlock color={theme.advisar.muted} text={theme.text.default}>advisar.muted</TokenBlock>
                <TokenBlock color={theme.advisar.text} text={theme.text.contrast}>advisar.text</TokenBlock>
                <TokenBlock color={theme.advisar.card} text={theme.text.default}>advisar.card</TokenBlock>
                <span className="col-span-6 text-sm">Canvas</span>
                <TokenBlock color={theme.canvas.base} text={theme.text.default}>canvas.base</TokenBlock>
                <TokenBlock color={theme.canvas.card} text={theme.text.default}>canvas.card</TokenBlock>
                <TokenBlock color={theme.canvas["100"]} text={theme.text.default}>canvas.100</TokenBlock>
                <TokenBlock color={theme.canvas["200"]} text={theme.text.default}>canvas.200</TokenBlock>
                <TokenBlock color={theme.canvas["300"]} text={theme.text.default}>canvas.300</TokenBlock>
                <TokenBlock color={theme.canvas["400"]} text={theme.text.default}>canvas.400</TokenBlock>
                <span className="col-span-6">Text</span>
                <TokenBlock color={theme.text.default} text={theme.text.contrast}>text.default</TokenBlock>
                <TokenBlock color={theme.text.emphasis} text={theme.text.contrast}>text.emphasis</TokenBlock>
                <TokenBlock color={theme.text.muted} text={theme.text.contrast}>text.muted</TokenBlock>
                <TokenBlock color={theme.text.disabled} text={theme.text.contrast}>text.disabled</TokenBlock>
                <TokenBlock color={theme.text.contrast} text={theme.text.default}>text.contrast</TokenBlock>
                <span className="col-span-6">Border</span>
                <TokenBlock color={theme.border.default} text={theme.text.contrast}>border.default</TokenBlock>
                <TokenBlock color={theme.border.emphasis} text={theme.text.contrast}>border.emphasis</TokenBlock>
                <TokenBlock color={theme.border.disabled} text={theme.text.contrast}>border.disabled</TokenBlock>
                <TokenBlock color={theme.border.bold} text={theme.text.contrast}>border.bold</TokenBlock>
                <span className="col-span-6">Fill</span>
                <TokenBlock color={theme.fill.default} text={theme.text.contrast}>fill.default</TokenBlock>
                <TokenBlock color={theme.fill.emphasis} text={theme.text.contrast}>fill.emphasis</TokenBlock>
                <TokenBlock color={theme.fill.disabledPrimary} text={theme.text.contrast}>fill.disabledPrimary</TokenBlock>
                <TokenBlock color={theme.fill.disabledSecondary} text={theme.text.contrast}>fill.disabledSecondary</TokenBlock>
                <TokenBlock color={theme.fill.weak} text={theme.text.default}>fill.weak</TokenBlock>
                <span className="col-span-6">Neutral</span>
                <TokenBlock color={theme.neutral.main} text={theme.text.contrast}>neutral.main</TokenBlock>
                <TokenBlock color={theme.neutral.light} text={theme.text.default}>neutral.light</TokenBlock>
                <TokenBlock color={theme.neutral.dark} text={theme.text.contrast}>neutral.dark</TokenBlock>
                <TokenBlock color={theme.neutral.muted} text={theme.text.default}>neutral.muted</TokenBlock>
                <TokenBlock color={theme.neutral.text} text={theme.text.contrast}>neutral.text</TokenBlock>
                <span className="col-span-6">Success</span>
                <TokenBlock color={theme.success.main} text={theme.text.contrast}>success.main</TokenBlock>
                <TokenBlock color={theme.success.light} text={theme.text.default}>success.light</TokenBlock>
                <TokenBlock color={theme.success.dark} text={theme.text.contrast}>success.dark</TokenBlock>
                <TokenBlock color={theme.success.muted} text={theme.text.default}>success.muted</TokenBlock>
                <TokenBlock color={theme.success.text} text={theme.text.contrast}>success.text</TokenBlock>
                <TokenBlock color={theme.success.card} text={theme.text.default}>success.card</TokenBlock>
                <span className="col-span-6">Error</span>
                <TokenBlock color={theme.error.main} text={theme.text.contrast}>error.main</TokenBlock>
                <TokenBlock color={theme.error.light} text={theme.text.default}>error.light</TokenBlock>
                <TokenBlock color={theme.error.dark} text={theme.text.contrast}>error.dark</TokenBlock>
                <TokenBlock color={theme.error.muted} text={theme.text.default}>error.muted</TokenBlock>
                <TokenBlock color={theme.error.text} text={theme.text.contrast}>error.text</TokenBlock>
                <TokenBlock color={theme.error.card} text={theme.text.default}>error.card</TokenBlock>
                <span className="col-span-6">Warning</span>
                <TokenBlock color={theme.warning.main} text={theme.text.contrast}>warning.main</TokenBlock>
                <TokenBlock color={theme.warning.light} text={theme.text.default}>warning.light</TokenBlock>
                <TokenBlock color={theme.warning.dark} text={theme.text.contrast}>warning.dark</TokenBlock>
                <TokenBlock color={theme.warning.muted} text={theme.text.default}>warning.muted</TokenBlock>
                <TokenBlock color={theme.warning.text} text={theme.text.contrast}>warning.text</TokenBlock>
                <TokenBlock color={theme.warning.card} text={theme.text.default}>warning.card</TokenBlock>
                <span className="col-span-6">Info</span>
                <TokenBlock color={theme.info.main} text={theme.text.contrast}>info.main</TokenBlock>
                <TokenBlock color={theme.info.light} text={theme.text.default}>info.light</TokenBlock>
                <TokenBlock color={theme.info.dark} text={theme.text.contrast}>info.dark</TokenBlock>
                <TokenBlock color={theme.info.muted} text={theme.text.default}>info.muted</TokenBlock>
                <TokenBlock color={theme.info.text} text={theme.text.contrast}>info.text</TokenBlock>
                <TokenBlock color={theme.info.card} text={theme.text.default}>info.card</TokenBlock>
                <span className="col-span-6">Grey</span>
                <TokenBlock color={theme.grey.main} text={theme.text.contrast}>grey.main</TokenBlock>
                <TokenBlock color={theme.grey.light} text={theme.text.default}>grey.light</TokenBlock>
                <TokenBlock color={theme.grey.dark} text={theme.text.contrast}>grey.dark</TokenBlock>
                <TokenBlock color={theme.grey.muted} text={theme.text.default}>grey.muted</TokenBlock>
                <TokenBlock color={theme.grey.text} text={theme.text.contrast}>grey.text</TokenBlock>
                <span className="col-span-6">Blue Grey</span>
                <TokenBlock color={theme.blueGrey.main} text={theme.text.contrast}>blueGrey.main</TokenBlock>
                <TokenBlock color={theme.blueGrey.light} text={theme.text.default}>blueGrey.light</TokenBlock>
                <TokenBlock color={theme.blueGrey.dark} text={theme.text.contrast}>blueGrey.dark</TokenBlock>
                <TokenBlock color={theme.blueGrey.muted} text={theme.text.default}>blueGrey.muted</TokenBlock>
                <TokenBlock color={theme.blueGrey.text} text={theme.text.contrast}>blueGrey.text</TokenBlock>
                <span className="col-span-6">Light Green</span>
                <TokenBlock color={theme.lightGreen.main} text={theme.text.contrast}>lightGreen.main</TokenBlock>
                <TokenBlock color={theme.lightGreen.light} text={theme.text.default}>lightGreen.light</TokenBlock>
                <TokenBlock color={theme.lightGreen.dark} text={theme.text.contrast}>lightGreen.dark</TokenBlock>
                <TokenBlock color={theme.lightGreen.muted} text={theme.text.default}>lightGreen.muted</TokenBlock>
                <TokenBlock color={theme.lightGreen.text} text={theme.text.contrast}>lightGreen.text</TokenBlock>
                <span className="col-span-6">Teal</span>
                <TokenBlock color={theme.teal.main} text={theme.text.contrast}>teal.main</TokenBlock>
                <TokenBlock color={theme.teal.light} text={theme.text.default}>teal.light</TokenBlock>
                <TokenBlock color={theme.teal.dark} text={theme.text.contrast}>teal.dark</TokenBlock>
                <TokenBlock color={theme.teal.muted} text={theme.text.default}>teal.muted</TokenBlock>
                <TokenBlock color={theme.teal.text} text={theme.text.contrast}>teal.text</TokenBlock>
                <span className="col-span-6">Cyan</span>
                <TokenBlock color={theme.cyan.main} text={theme.text.contrast}>cyan.main</TokenBlock>
                <TokenBlock color={theme.cyan.light} text={theme.text.default}>cyan.light</TokenBlock>
                <TokenBlock color={theme.cyan.dark} text={theme.text.contrast}>cyan.dark</TokenBlock>
                <TokenBlock color={theme.cyan.muted} text={theme.text.default}>cyan.muted</TokenBlock>
                <TokenBlock color={theme.cyan.text} text={theme.text.contrast}>cyan.text</TokenBlock>
                <span className="col-span-6">Blue</span>
                <TokenBlock color={theme.blue.main} text={theme.text.contrast}>blue.main</TokenBlock>
                <TokenBlock color={theme.blue.light} text={theme.text.default}>blue.light</TokenBlock>
                <TokenBlock color={theme.blue.dark} text={theme.text.contrast}>blue.dark</TokenBlock>
                <TokenBlock color={theme.blue.muted} text={theme.text.default}>blue.muted</TokenBlock>
                <TokenBlock color={theme.blue.text} text={theme.text.contrast}>blue.text</TokenBlock>
                <span className="col-span-6">Indigo</span>
                <TokenBlock color={theme.indigo.main} text={theme.text.contrast}>indigo.main</TokenBlock>
                <TokenBlock color={theme.indigo.light} text={theme.text.default}>indigo.light</TokenBlock>
                <TokenBlock color={theme.indigo.dark} text={theme.text.contrast}>indigo.dark</TokenBlock>
                <TokenBlock color={theme.indigo.muted} text={theme.text.default}>indigo.muted</TokenBlock>
                <TokenBlock color={theme.indigo.text} text={theme.text.contrast}>indigo.text</TokenBlock>
                <span className="col-span-6">Teal</span>
                <TokenBlock color={theme.teal.main} text={theme.text.contrast}>teal.main</TokenBlock>
                <TokenBlock color={theme.teal.light} text={theme.text.default}>teal.light</TokenBlock>
                <TokenBlock color={theme.teal.dark} text={theme.text.contrast}>teal.dark</TokenBlock>
                <TokenBlock color={theme.teal.muted} text={theme.text.default}>teal.muted</TokenBlock>
                <TokenBlock color={theme.teal.text} text={theme.text.contrast}>teal.text</TokenBlock>
                <span className="col-span-6">Deep Purple</span>
                <TokenBlock color={theme.deepPurple.main} text={theme.text.contrast}>deepPurple.main</TokenBlock>
                <TokenBlock color={theme.deepPurple.light} text={theme.text.default}>deepPurple.light</TokenBlock>
                <TokenBlock color={theme.deepPurple.dark} text={theme.text.contrast}>deepPurple.dark</TokenBlock>
                <TokenBlock color={theme.deepPurple.muted} text={theme.text.default}>deepPurple.muted</TokenBlock>
                <TokenBlock color={theme.deepPurple.text} text={theme.text.contrast}>deepPurple.text</TokenBlock>
                <span className="col-span-6">Purple</span>
                <TokenBlock color={theme.purple.main} text={theme.text.contrast}>purple.main</TokenBlock>
                <TokenBlock color={theme.purple.light} text={theme.text.default}>purple.light</TokenBlock>
                <TokenBlock color={theme.purple.dark} text={theme.text.contrast}>purple.dark</TokenBlock>
                <TokenBlock color={theme.purple.muted} text={theme.text.default}>purple.muted</TokenBlock>
                <TokenBlock color={theme.purple.text} text={theme.text.contrast}>purple.text</TokenBlock>
                <span className="col-span-6">Pink</span>
                <TokenBlock color={theme.pink.main} text={theme.text.contrast}>pink.main</TokenBlock>
                <TokenBlock color={theme.pink.light} text={theme.text.default}>pink.light</TokenBlock>
                <TokenBlock color={theme.pink.dark} text={theme.text.contrast}>pink.dark</TokenBlock>
                <TokenBlock color={theme.pink.muted} text={theme.text.default}>pink.muted</TokenBlock>
                <TokenBlock color={theme.pink.text} text={theme.text.contrast}>pink.text</TokenBlock>
                <span className="col-span-6">Amber</span>
                <TokenBlock color={theme.amber.main} text={theme.text.contrast}>amber.main</TokenBlock>
                <TokenBlock color={theme.amber.light} text={theme.text.default}>amber.light</TokenBlock>
                <TokenBlock color={theme.amber.dark} text={theme.text.contrast}>amber.dark</TokenBlock>
                <TokenBlock color={theme.amber.muted} text={theme.text.default}>amber.muted</TokenBlock>
                <TokenBlock color={theme.amber.text} text={theme.text.contrast}>amber.text</TokenBlock>
            </div>
        </Collapse>
    )
}

export default M2Schemes;