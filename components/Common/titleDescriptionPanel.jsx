export default class titleDescriptionPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleClick(){
        window.income_playurl = minejquery(this.refs.playButton).data('href');
        EnsureScriptFunc("SP.UI.Dialog.js", 'SP.UI.ModalDialog.showModalDialog', function () {
            var $option = new SP.UI.DialogOptions();
            $option.showClose = true;
            $option.allowMaximize = true;
            $option.title = window.income_playurl.substr(window.income_playurl.lastIndexOf('/') + 1);
            $option.url = _spPageContextInfo.siteAbsoluteUrl + "/Pages/IncomePlayer.aspx?params=" + window.income_playurl;
            $option.width = 620;
            $option.height = 500;
            $option.dialogReturnValueCallback = null;
            var result = SP.UI.ModalDialog.showModalDialog($option);
        });
    }

    render() {
        let {title, description, itemhref, isVideo, videoUrl } = this.props;
        let titleClassName = isVideo?"acs-titledescriptionpanel-wrap play": "acs-titledescriptionpanel-wrap";
        if(isVideo)
        {
            return (
                <div className={titleClassName}>
                    <a data-href={videoUrl} onClick={this.handleClick.bind(this)} ref='playButton'>
                        <span className='acs-titledescriptionpanel-title'>{title}</span>
                        <span className='acs-titledescriptionpanel-description'>{description}</span>
                        <span className='acs-titledescriptionpanel-play'><div></div></span>
                    </a>
                </div>
            );
        }else{
            return (
                <div className={titleClassName}>
                    <a href={itemhref}>
                        <span className='acs-titledescriptionpanel-title' title={title}>{title}</span>
                        <span className='acs-titledescriptionpanel-description'>{description}</span>
                        <span className='acs-titledescriptionpanel-play'><div></div></span>
                    </a>
                </div>
            );

        }
    }
}