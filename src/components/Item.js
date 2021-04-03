import React from 'react';

const Item = (props) => {
    return (
        <div style={{marginBottom:'10px'}}>
            <div style={{flexDirection:'row',border:'1px solid #ededed', backgroundColor:(props.index===0)?'#ffe7bd':'#fff', borderRadius:'5px', padding:'0px'}}>
                <div style={{display:'inline', width:'40%'}}>
                    <img src={process.env.PUBLIC_URL + '/component.png'} width={(props.index===0)?'95px':'80px'} alt="component"/>
                </div>
                <div style={{display:'inline-block', paddingLeft:'5px',paddingTop:'10px', width:'60%', minHeight:'60px',verticalAlign:'middle'}}>
                    <span style={{display:'block'}}>Nama Produk</span>
                    <div style={{width:'100%'}}>
                        <span style={{float:'left'}}>Rp. 999.999</span>
                        <span style={{float:'right'}}>999</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
