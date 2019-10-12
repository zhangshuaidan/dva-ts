import 'braft-editor/dist/index.css'
import React, { Component } from 'react';
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import styles from './index.less';
import { Upload, Icon,message, Button } from 'antd'
const excludeControls = ['media','fullscreen']

interface Props {
    // isLivinig:boolean
}
interface State{

}

class RichEditor extends Component<Props,State> {

    state = {
        editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
        outputHTML: '<p></p>'
    }
    isLivinig: boolean;

    componentDidMount() {
        this.isLivinig = true
        // 3秒后更改编辑器内容
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount() {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
        })
    }
    addIMG = (res)=>{
        const { url } = res;
        this.setState({
            editorState: ContentUtils.insertMedias(this.state.editorState, [{
              type: 'IMAGE',
              url
            }])
          })
    }

    submit = ()=>{
        console.log('提交的内容为:',this.state.outputHTML)
    }

    render() {
        const { editorState, outputHTML } = this.state
        const _ =this;
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
            onChange(info) {
                if(info.file.status === 'done'){
                    // this.addIMG()
                    // console.log('event====>>>>',info.file.response)
                    _.addIMG(info.file.response)
                    // console.log('event====>>>>',fileList)
                }
            //   if (info.file.status !== 'uploading') {
            //     console.log(info.file, info.fileList);
            //   }
            //   if (info.file.status === 'done') {
            //     message.success(`${info.file.name} file uploaded successfully`);
            //   } else if (info.file.status === 'error') {
            //     message.error(`${info.file.name} file upload failed.`);
            //   }
            },
          };
          const extendControls = [
            {
              key: 'antd-uploader',
              type: 'component',
              component: (
                <Upload
                //   accept="image/*"
                  showUploadList={false}
                {...props}
                //   customRequest={this.uploadHandler}
        
                >
                  {/* 这里的按钮最好加上type="button"，以避免在表单容器中触发表单提交，用Antd的Button组件则无需如此 */}
                  <button type="button" className="control-item button upload-button" data-title="插入图片">
                    <Icon type="picture" theme="filled" />
                  </button>
                </Upload>
              )
            }
          ]
        return (
            <div>
                <div className={styles.outer}>
                    <div className="editor-wrapper">
                        <BraftEditor
                            value={editorState}
                            onChange={this.handleChange}
                            extendControls={extendControls}
                            excludeControls={excludeControls}
                        />
                    </div>
                    <h5>输出内容</h5>
                    <div className="output-content">{outputHTML}</div>
                </div>
                <div className={styles.footer}>
                        <Button onClick={this.submit} type="primary" style={{width:100}}> 提交</Button>
                </div>
            </div>
        )
    }
}

export default RichEditor;