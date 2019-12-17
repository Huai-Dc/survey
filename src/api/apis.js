/**
 * Created by huai on 2019-12-17
 */
'use strict';

export default {
  "baseUrl": 'http://192.168.1.49:8000/',
  // "baseUrl": '/api',
  "getSurveyList": '/Home/GetCaseUserList/', /// 后面加问卷id
  "getCaseSubject": '/Home/GetCaseSubject/',
  "saveCaseAnswer": '/Home/SaveCaseSubjectAnswer', /// 保存单个问题答案
  "saveCaseUser": '/Home/SaveCaseUser',  // 保存调研用户信息
}
