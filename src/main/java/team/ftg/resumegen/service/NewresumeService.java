package team.ftg.resumegen.service;

import team.ftg.resumegen.entity.Basic_Info;
import team.ftg.resumegen.entity.Exp_Info;
import team.ftg.resumegen.entity.Intent_Info;
import team.ftg.resumegen.entity.Intro_Info;

import java.util.List;

public interface NewresumeService {

    //将 基础信息 存入数据库
    void insertBasicInfo(Basic_Info basic_info);

    //将 求职意向 存入数据库
    void insertIntentInfo(Intent_Info intent_info);

    //将 教育/项目经历 存入数据库
    void insertExperienceInfo(Exp_Info exp_info);

    //将 自我评价 存入数据库
    void insertIntroduceInfo(Intro_Info intro_info);

    //从数据库获取 基础信息
    Basic_Info getBasicInfo(int user_id);

    //从数据库获取 求职意向
    Intent_Info getIntentInfo(int user_id);

    //从数据库获取 教育/项目经历
    Exp_Info getExperienceInfo(int user_id);

    //从数据库获取 自我评价
    Intro_Info getIntroduceInfo(int user_id);

    // 查询一下用户是否已经填写过简历需要填写的信息
    boolean checkStatus(int user_id);




}
