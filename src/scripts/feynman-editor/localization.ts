import type { PropagatorKind } from './diagram-types';

export type FeynmanEditorLocaleCode = 'zh' | 'en';

type Direction = 'ltr';

interface LocaleLink {
  href: string;
  label: string;
}

interface FeynmanEditorMetaText {
  title: string;
  description: string;
}

interface FeynmanEditorHeroText {
  heading: string;
  introductionBeforeJaxoDraw: string;
  introductionAfterJaxoDraw: string;
  introductionExportSuffix: string;
}

interface FeynmanEditorToolbarText {
  toolGroupAriaLabel: string;
  actionGroupAriaLabel: string;
  selectedElementAriaLabel: string;
  lineTypeAriaLabel: string;
  loopTitle: string;
  undoTitle: string;
  redoTitle: string;
  flipTitle: string;
  duplicateTitle: string;
  deleteTitle: string;
  tools: Record<
    'select' | PropagatorKind | 'loop' | 'vertex' | 'label',
    string
  >;
  kinds: Record<PropagatorKind, string>;
  actions: {
    undo: string;
    redo: string;
    clear: string;
    snapToGrid: string;
    grid: string;
    arrow: string;
    flip: string;
    duplicate: string;
    delete: string;
  };
}

interface FeynmanEditorExportText {
  heading: string;
  latexOutputAriaLabel: string;
  copyLatex: string;
  downloadSvg: string;
  downloadPng: string;
  saveJson: string;
  loadJson: string;
}

interface FeynmanEditorTipsText {
  selectToolName: string;
  loopToolName: string;
  mathExampleConnector: string;
  start: string;
  afterSelect: string;
  afterLoop: string;
  afterMathExamples: string;
  afterTextCommand: string;
}

export interface FeynmanEditorRuntimeText {
  clearDiagramConfirmation: string;
  copiedLabel: string;
  copyLatexLabel: string;
  fileReadError: string;
}

export interface FeynmanEditorLocale {
  code: FeynmanEditorLocaleCode;
  htmlLang: string;
  direction: Direction;
  route: string;
  languageName: string;
  homeLink: LocaleLink;
  languageSwitcherAriaLabel: string;
  meta: FeynmanEditorMetaText;
  hero: FeynmanEditorHeroText;
  toolbar: FeynmanEditorToolbarText;
  exportPanel: FeynmanEditorExportText;
  tips: FeynmanEditorTipsText;
  runtime: FeynmanEditorRuntimeText;
}

export const feynmanEditorLocales: Record<FeynmanEditorLocaleCode, FeynmanEditorLocale> = {
  zh: {
    code: 'zh',
    htmlLang: 'zh-Hans',
    direction: 'ltr',
    route: '/',
    languageName: '中文',
    homeLink: {
      href: 'https://zichaoyang.com/',
      label: '返回 zichaoyang.com',
    },
    languageSwitcherAriaLabel: '选择页面语言',
    meta: {
      title: '费曼图编辑器 - Zichao Yang',
      description:
        '一个受 JaxoDraw 启发的浏览器版费曼图编辑器：绘制传播子、弧线和圈图，并导出 axodraw2 LaTeX、SVG 或 PNG。',
    },
    hero: {
      heading: '费曼图编辑器',
      introductionBeforeJaxoDraw: '这是一个网页版 ',
      introductionAfterJaxoDraw:
        ' 风格的费曼图编辑器：选择传播子后点击并拖拽即可绘制，也可以拖动中点控制柄把直线弯成弧线。所有操作都在浏览器里完成，图可以导出为 ',
      introductionExportSuffix: ' LaTeX、SVG 或 PNG。',
    },
    toolbar: {
      toolGroupAriaLabel: '工具',
      actionGroupAriaLabel: '操作',
      selectedElementAriaLabel: '选中元素',
      lineTypeAriaLabel: '线型',
      loopTitle: '从中心向外拖拽；使用最近一次选择的传播子类型',
      undoTitle: 'Cmd/Ctrl+Z',
      redoTitle: 'Shift+Cmd/Ctrl+Z',
      flipTitle: '反转箭头或路径方向',
      duplicateTitle: 'Cmd/Ctrl+D',
      deleteTitle: 'Delete / Backspace',
      tools: {
        select: '选择',
        fermion: '费米子 ─>─',
        photon: '光子 ~~~',
        gluon: '胶子 ⊚⊚⊚',
        scalar: '标量 - - -',
        ghost: '鬼粒子 ····',
        loop: '圈图 ◯',
        vertex: '顶点 ●',
        label: '标注 𝑒⁻',
      },
      kinds: {
        fermion: '费米子',
        photon: '光子',
        gluon: '胶子',
        scalar: '标量',
        ghost: '鬼粒子',
      },
      actions: {
        undo: '撤销',
        redo: '重做',
        clear: '清空',
        snapToGrid: '对齐网格',
        grid: '网格',
        arrow: '箭头',
        flip: '反向',
        duplicate: '复制',
        delete: '删除',
      },
    },
    exportPanel: {
      heading: 'axodraw2 LaTeX',
      latexOutputAriaLabel: '生成的 axodraw2 LaTeX 代码',
      copyLatex: '复制 LaTeX',
      downloadSvg: '下载 SVG',
      downloadPng: '下载 PNG',
      saveJson: '保存 JSON',
      loadJson: '加载 JSON',
    },
    tips: {
      selectToolName: '选择',
      loopToolName: '圈图',
      mathExampleConnector: '或',
      start: '绘图提示：画完一笔后，工具会自动切回',
      afterSelect:
        '。拖动蓝色端点控制柄可以重新连接线条，端点会吸附到附近的顶点和端点；横向拖动空心中点控制柄可以把传播子弯成弧线；拖动圈图的空心控制柄可以调整半径。',
      afterLoop:
        '工具会用最近一次选择的传播子类型画一个闭合圆；下拉框可以修改当前选中元素的类型。双击标注可以编辑文字。标注会按真正的数学公式排版，',
      afterMathExamples:
        '会在画布、SVG 和 PNG 下载里保持一致，并原样导出到',
      afterTextCommand:
        '。方向键可以微调选中元素，按住 Shift 步长更大，Cmd/Ctrl+D 可以复制。图会自动保存到本地存储；用保存/加载 JSON 可以保留或分享文件。',
    },
    runtime: {
      clearDiagramConfirmation: '清空整张图？',
      copiedLabel: '已复制',
      copyLatexLabel: '复制 LaTeX',
      fileReadError: '无法读取这个文件。请选择由本编辑器保存的 JSON 文件。',
    },
  },
  en: {
    code: 'en',
    htmlLang: 'en',
    direction: 'ltr',
    route: '/en/',
    languageName: 'English',
    homeLink: {
      href: 'https://zichaoyang.com/',
      label: 'Back to zichaoyang.com',
    },
    languageSwitcherAriaLabel: 'Choose page language',
    meta: {
      title: 'Feynman Diagram Editor - Zichao Yang',
      description:
        'A browser-based Feynman diagram editor inspired by JaxoDraw: draw propagators, arcs and loops with click-and-drag, export to axodraw2 LaTeX, SVG or PNG.',
    },
    hero: {
      heading: 'Feynman Diagram Editor',
      introductionBeforeJaxoDraw: 'A web take on ',
      introductionAfterJaxoDraw:
        ': pick a propagator, click-and-drag to draw, then drag the midpoint handle to bend a line into an arc. Everything stays in your browser, and the diagram exports as ',
      introductionExportSuffix: ' LaTeX, SVG or PNG.',
    },
    toolbar: {
      toolGroupAriaLabel: 'Tools',
      actionGroupAriaLabel: 'Actions',
      selectedElementAriaLabel: 'Selected element',
      lineTypeAriaLabel: 'Line type',
      loopTitle: 'Drag from center outward; uses the last propagator type',
      undoTitle: 'Cmd/Ctrl+Z',
      redoTitle: 'Shift+Cmd/Ctrl+Z',
      flipTitle: 'Reverse the arrow / traversal direction',
      duplicateTitle: 'Cmd/Ctrl+D',
      deleteTitle: 'Delete / Backspace',
      tools: {
        select: 'Select',
        fermion: 'Fermion ─>─',
        photon: 'Photon ~~~',
        gluon: 'Gluon ⊚⊚⊚',
        scalar: 'Scalar - - -',
        ghost: 'Ghost ····',
        loop: 'Loop ◯',
        vertex: 'Vertex ●',
        label: 'Label 𝑒⁻',
      },
      kinds: {
        fermion: 'Fermion',
        photon: 'Photon',
        gluon: 'Gluon',
        scalar: 'Scalar',
        ghost: 'Ghost',
      },
      actions: {
        undo: 'Undo',
        redo: 'Redo',
        clear: 'Clear',
        snapToGrid: 'Snap to grid',
        grid: 'Grid',
        arrow: 'Arrow',
        flip: 'Flip',
        duplicate: 'Duplicate',
        delete: 'Delete',
      },
    },
    exportPanel: {
      heading: 'axodraw2 LaTeX',
      latexOutputAriaLabel: 'Generated axodraw2 LaTeX code',
      copyLatex: 'Copy LaTeX',
      downloadSvg: 'Download SVG',
      downloadPng: 'Download PNG',
      saveJson: 'Save JSON',
      loadJson: 'Load JSON',
    },
    tips: {
      selectToolName: 'Select',
      loopToolName: 'Loop',
      mathExampleConnector: 'or',
      start: 'Drawing tips: after drawing, the tool switches to',
      afterSelect:
        ' - drag the blue endpoint handles to reconnect lines (they snap to nearby vertices and endpoints), drag the hollow midpoint handle sideways to bend a propagator into an arc, and drag a loop\'s hollow handle to resize it. The',
      afterLoop:
        'tool draws a closed circle using the last propagator type you picked; the dropdown changes the type of whatever is selected. Double-click a label to edit it - labels are typeset as real math (MathJax), so',
      afterMathExamples:
        'render identically on the canvas and in the SVG/PNG downloads, and export verbatim into',
      afterTextCommand:
        '. Arrow keys nudge the selection (Shift for bigger steps), Cmd/Ctrl+D duplicates. Diagrams autosave to local storage; use Save/Load JSON to keep or share a file.',
    },
    runtime: {
      clearDiagramConfirmation: 'Clear the whole diagram?',
      copiedLabel: 'Copied!',
      copyLatexLabel: 'Copy LaTeX',
      fileReadError: 'Could not read that file - expected JSON saved by this editor.',
    },
  },
};

export function getFeynmanEditorLocale(
  localeCode: string | null | undefined
): FeynmanEditorLocale {
  if (localeCode === 'zh' || localeCode === 'en') {
    return feynmanEditorLocales[localeCode];
  }

  return feynmanEditorLocales.zh;
}

export function getFeynmanEditorRuntimeText(
  localeCode: string | null | undefined
): FeynmanEditorRuntimeText {
  return getFeynmanEditorLocale(localeCode).runtime;
}
