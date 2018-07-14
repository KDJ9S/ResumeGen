package team.ftg.resumegen.service;

import team.ftg.resumegen.entity.Basic_Info;
import team.ftg.resumegen.entity.Exp_Info;
import team.ftg.resumegen.entity.Intent_Info;
import team.ftg.resumegen.entity.Intro_Info;

public interface NewresumeService {

    //将 基础信息 存入数据库
    public void insertBasicInfo(Basic_Info basic_info);

    //将 求职意向 存入数据库
    public void insertIntentInfo(Intent_Info intent_info);

    //将 教育/项目经历 存入数据库
    public void insertExperienceInfo(Exp_Info exp_info);

    //将 自我评价 存入数据库
    public void insertIntroduceInfo(Intro_Info intro_info);


}
