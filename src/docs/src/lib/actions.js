import { readEnv } from "$lib/util"
const root = readEnv("VITE_ROOT")

export function replace(node, parameters = {}) {
  const originalContent = node.textContent ?? ""
  const defaultParameters = {
    search: "$$",
    to: "",
  }

  function update(p) {
    const { search, to } = {
      ...defaultParameters,
      ...p,
    }
    node.textContent = originalContent.replaceAll(search, to)
  }

  update(parameters)

  return {
    update,
  }
}
export function htmlToJsx(node) {
  const originalContent = node.textContent ?? ""

  const stringsToReplace = {
    "<br>": "<br/>",
    "onclick=": "onClick=",
    '"0"': "{0}",
    "<!--": "{/*",
    "-->": "*/}",
    'checked="checked"': "defaultChecked",

    // "accent-height=": "accentHeight=",
    // "alignment-baseline=": "alignmentBaseline=",
    // "allow-reorder=": "allowReorder=",
    // "arabic-form=": "arabicForm=",
    // "attribute-name=": "attributeName=",
    // "attribute-type=": "attributeType=",
    // "auto-reverse=": "autoReverse=",
    // "base-frequency=": "baseFrequency=",
    // "base-profile=": "baseProfile=",
    // "baseline-shift=": "baselineShift=",
    // "calc-mode=": "calcMode=",
    // "cap-height=": "capHeight=",
    // "clip-path=": "clipPath=",
    // "clip-path-units=": "clipPathUnits=",
    "clip-rule=": "clipRule=",
    // "color-interpolation=": "colorInterpolation=",
    // "color-interpolation-filters=": "colorInterpolationFilters=",
    // "color-profile=": "colorProfile=",
    // "color-rendering=": "colorRendering=",
    // "content-script-type=": "contentScriptType=",
    // "content-style-type=": "contentStyleType=",
    // "diffuse-constant=": "diffuseConstant=",
    // "dominant-baseline=": "dominantBaseline=",
    // "edge-mode=": "edgeMode=",
    // "enable-background=": "enableBackground=",
    // "external-resources-required=": "externalResourcesRequired=",
    "fill-opacity=": "fillOpacity=",
    "fill-rule=": "fillRule=",
    // "filter-res=": "filterRes=",
    // "filter-units=": "filterUnits=",
    // "flood-color=": "floodColor=",
    // "flood-opacity=": "floodOpacity=",
    // "font-family=": "fontFamily=",
    // "font-size=": "fontSize=",
    // "font-size-adjust=": "fontSizeAdjust=",
    // "font-stretch=": "fontStretch=",
    // "font-style=": "fontStyle=",
    // "font-variant=": "fontVariant=",
    // "font-weight=": "fontWeight=",
    // "glyph-name=": "glyphName=",
    // "glyph-orientation-horizontal=": "glyphOrientationHorizontal=",
    // "glyph-orientation-vertical=": "glyphOrientationVertical=",
    // "glyph-ref=": "glyphRef=",
    // "gradient-transform=": "gradientTransform=",
    // "gradient-units=": "gradientUnits=",
    // "horiz-adv-x=": "horizAdvX=",
    // "horiz-origin-x=": "horizOriginX=",
    // "image-rendering=": "imageRendering=",
    // "kernel-matrix=": "kernelMatrix=",
    // "kernel-unit-length=": "kernelUnitLength=",
    // "key-points=": "keyPoints=",
    // "key-splines=": "keySplines=",
    // "key-times=": "keyTimes=",
    // "length-adjust=": "lengthAdjust=",
    // "letter-spacing=": "letterSpacing=",
    // "lighting-color=": "lightingColor=",
    // "limiting-cone-angle=": "limitingConeAngle=",
    // "marker-end=": "markerEnd=",
    // "marker-height=": "markerHeight=",
    // "marker-mid=": "markerMid=",
    // "marker-start=": "markerStart=",
    // "marker-units=": "markerUnits=",
    // "marker-width=": "markerWidth=",
    // "mask-content-units=": "maskContentUnits=",
    // "mask-units=": "maskUnits=",
    // "num-octaves=": "numOctaves=",
    // "overline-position=": "overlinePosition=",
    // "overline-thickness=": "overlineThickness=",
    // "paint-order=": "paintOrder=",
    // "path-length=": "pathLength=",
    // "pattern-content-units=": "patternContentUnits=",
    // "pattern-transform=": "patternTransform=",
    // "pattern-units=": "patternUnits=",
    // "pointer-events=": "pointerEvents=",
    // "points-at-x=": "pointsAtX=",
    // "points-at-y=": "pointsAtY=",
    // "points-at-z=": "pointsAtZ=",
    // "preserve-alpha=": "preserveAlpha=",
    // "preserve-aspect-ratio=": "preserveAspectRatio=",
    // "primitive-units=": "primitiveUnits=",
    // "ref-x=": "refX=",
    // "ref-y=": "refY=",
    // "rendering-intent=": "renderingIntent=",
    // "repeat-count=": "repeatCount=",
    // "repeat-dur=": "repeatDur=",
    // "required-extensions=": "requiredExtensions=",
    // "required-features=": "requiredFeatures=",
    // "shape-rendering=": "shapeRendering=",
    // "specular-constant=": "specularConstant=",
    // "specular-exponent=": "specularExponent=",
    // "spread-method=": "spreadMethod=",
    // "start-offset=": "startOffset=",
    // "std-deviation=": "stdDeviation=",
    // "stitch-tiles=": "stitchTiles=",
    // "stop-color=": "stopColor=",
    // "stop-opacity=": "stopOpacity=",
    // "strikethrough-position=": "strikethroughPosition=",
    // "strikethrough-thickness=": "strikethroughThickness=",
    "stroke-dasharray=": "strokeDasharray=",
    "stroke-dashoffset=": "strokeDashoffset=",
    "stroke-linecap=": "strokeLinecap=",
    "stroke-linejoin=": "strokeLinejoin=",
    // "stroke-miterlimit=": "strokeMiterlimit=",
    "stroke-opacity=": "strokeOpacity=",
    "stroke-width=": "strokeWidth=",
    // "surface-scale=": "surfaceScale=",
    // "system-language=": "systemLanguage=",
    // "table-values=": "tableValues=",
    // "target-x=": "targetX=",
    // "target-y=": "targetY=",
    // "text-anchor=": "textAnchor=",
    // "text-decoration=": "textDecoration=",
    // "text-length=": "textLength=",
    // "text-rendering=": "textRendering=",
    // "underline-position=": "underlinePosition=",
    // "underline-thickness=": "underlineThickness=",
    // "unicode-bidi=": "unicodeBidi=",
    // "unicode-range=": "unicodeRange=",
    // "units-per-em=": "unitsPerEm=",
    // "v-alphabetic=": "vAlphabetic=",
    // "v-hanging=": "vHanging=",
    // "v-ideographic=": "vIdeographic=",
    // "v-mathematical=": "vMathematical=",
    // "vector-effect=": "vectorEffect=",
    // "vert-adv-y=": "vertAdvY=",
    // "vert-origin-x=": "vertOriginX=",
    // "vert-origin-y=": "vertOriginY=",
    // "view-box=": "viewBox=",
    // "view-target=": "viewTarget=",
    // "word-spacing=": "wordSpacing=",
    // "writing-mode=": "writingMode=",
    // "x-channel-selector=": "xChannelSelector=",
    // "x-height=": "xHeight=",
    // "xlink-actuate=": "xlinkActuate=",
    // "xlink-arcrole=": "xlinkArcrole=",
    // "xlink-href=": "xlinkHref=",
    // "xlink-role=": "xlinkRole=",
    // "xlink-show=": "xlinkShow=",
    // "xlink-title=": "xlinkTitle=",
    // "xlink-type=": "xlinkType=",
    // "xmlns-xlink=": "xmlnsXlink=",
    // "xml-base=": "xmlBase=",
    // "xml-lang=": "xmlLang=",
    // "xml-space=": "xmlSpace=",
    // "y-channel-selector=": "yChannelSelector=",
    // "zoom-and-pan=": "zoomAndPan=",

    // "accept-charset=": "acceptCharset=",
    // "access-key=": "accessKey=",
    // "allow-full-screen=": "allowFullScreen=",
    // "auto-complete=": "autoComplete=",
    // "auto-focus=": "autoFocus=",
    // "auto-play=": "autoPlay=",
    // "cell-padding=": "cellPadding=",
    // "cell-spacing=": "cellSpacing=",
    // "char-set=": "charSet=",
    // "class-id=": "classID=",
    "class=": "className=",
    // "col-span=": "colSpan=",
    // "content-editable=": "contentEditable=",
    // "context-menu=": "contextMenu=",
    // "controls-list=": "controlsList=",
    // "cross-origin=": "crossOrigin=",
    // "date-time=": "dateTime=",
    // "enc-type=": "encType=",
    // "form-action=": "formAction=",
    // "form-enc-type=": "formEncType=",
    // "form-method=": "formMethod=",
    // "form-no-validate=": "formNoValidate=",
    // "form-target=": "formTarget=",
    // "frame-border=": "frameBorder=",
    // "href-lang=": "hrefLang=",
    "for=": "htmlFor=",
    // "http-equiv=": "httpEquiv=",
    // "input-mode=": "inputMode=",
    // "key-params=": "keyParams=",
    // "key-type=": "keyType=",
    // "margin-height=": "marginHeight=",
    // "margin-width=": "marginWidth=",
    // "max-length=": "maxLength=",
    // "media-group=": "mediaGroup=",
    // "min-length=": "minLength=",
    // "no-validate=": "noValidate=",
    // "radio-group=": "radioGroup=",
    // "read-only=": "readOnly=",
    // "row-span=": "rowSpan=",
    // "spell-check=": "spellCheck=",
    // "src-doc=": "srcDoc=",
    // "src-lang=": "srcLang=",
    // "src-set=": "srcSet=",
    "tabindex=": "tabIndex=",
    // "use-map=": "useMap=",
  }
  const re = new RegExp(Object.keys(stringsToReplace).join("|"), "gi")

  function update() {
    node.textContent = originalContent.replace(re, function (matched) {
      return stringsToReplace[matched.toLowerCase()]
    })
  }

  update()

  return {
    update,
  }
}
export function linkProcess(node) {
  const originalContent = node.textContent ?? ""

  const stringsToReplace = {
    '"/images': `"${root}/images`,
  }
  const re = new RegExp(Object.keys(stringsToReplace).join("|"), "gi")

  function update() {
    node.textContent = originalContent.replace(re, function (matched) {
      return stringsToReplace[matched.toLowerCase()]
    })
  }

  update()

  return {
    update,
  }
}
