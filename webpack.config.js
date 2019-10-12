import ThemeColorReplacer from 'webpack-theme-color-replacer';
import generate from '@ant-design/colors/lib/generate';
const getAntdSerials = (color) => {
    const lightNum = 9;
    const devide10 = 10;
    // 淡化（即less的tint）
    const lightens = new Array(lightNum).fill(undefined).map((_, i) => {
      return ThemeColorReplacer.varyColor.lighten(color, i / devide10);
    });
    const colorPalettes = generate(color);
    const rgb = ThemeColorReplacer.varyColor.toNum3(color.replace('#', '')).join(',');
    return lightens.concat(colorPalettes).concat(rgb);
  };
export default (config) => {
    config.plugins.push(new ThemeColorReplacer(
        {
            fileName: 'css/theme-colors-[hash:8].css',
            matchColors: getAntdSerials('#1890ff'), // 主色系列
            // 改变样式选择器，解决样式覆盖问题
            changeSelector(selector) {
                switch (selector) {
                    case '.ant-calendar-today .ant-calendar-date':
                        return ':not(.ant-calendar-selected-date)' + selector;
                    case '.ant-btn:focus,.ant-btn:hover':
                        return '.ant-btn:focus:not(.ant-btn-primary),.ant-btn:hover:not(.ant-btn-primary)';
                    case '.ant-btn.active,.ant-btn:active':
                        return '.ant-btn.active:not(.ant-btn-primary),.ant-btn:active:not(.ant-btn-primary)';
                    default:
                        return selector;
                }
            },
            // isJsUgly: true,
        }
    ))

    return config;
  
  }