'use strict';

const request = require('sync-request');
const chalk = require('chalk');


let backup = [ 
  'rax-redux',
  'universal-jsonp',
  'rax-animated',
  'rax-refreshcontrol',
  'universal-panresponder',
  'rax-button',
  'rax-scrollview',
  'rax-calendar',
  'universal-platform',
  'rax-slider',
  'rax-picture',
  'rax-player',
  'rax-recyclerview',
  'universal-env',
  'rax',
  'universal-stylesheet',
  'rax-components',
  'rax-switch',
  'universal-toast',
  'rax-countdown',
  'rax-tabbar',
  'universal-transition',
  'rax-gotop',
  'rax-tabheader',
  'web-rax-framework',
  'rax-grid',
  'rax-icon',
  'rax-text',
  'rax-image',
  'rax-textinput',
  'rax-link',
  'rax-touchable',
  'rax-listview',
  'rax-video',
  'rax-modal',
  'rax-view',
  'rax-multirow',
  'universal-perf',
  'rax-canvas',
  'rax-charts',
  'rax-checkbox',
  'rax-menulist',
  'rax-navigation',
  'rax-picker',
  'rax-timepicker' ];

function getComponentList(){
  try {
    var res = request('GET', 'http://rax-npms.labs.taobao.net/', {
      timeout: 3000
    });
  }catch(e) {
    return backup;    
  }

  if(res.statusCode == 200) {
    let result;

    try {
      result = JSON.parse(res.getBody().toString());
    } catch (error) {
      return backup;
    }
    
    if(result.status){
      let data = result.data;
      let coms = data.map((com)=>{
        return com.npm;
      })

      return coms;
    }else {
      console.log(chalk.red('获取 rax 组件列表失败，使用备用列表'));
      return backup;
    }
  }else {
    console.log(chalk.red('获取 rax 组件列表失败，使用备用列表'));
    return backup;
  }
}

exports.getComponentList = getComponentList;



