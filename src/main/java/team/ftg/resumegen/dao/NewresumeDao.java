package team.ftg.resumegen.dao;


import team.ftg.resumegen.entity.Basic_Info;
import team.ftg.resumegen.entity.Exp_Info;
import team.ftg.resumegen.entity.Intent_Info;
import team.ftg.resumegen.entity.Intro_Info;

/**
 * New resume 接口
 */
public interface NewresumeDao {


    /**
     * 将 基础信息 存入数据库
     * @param basic_info
     */
    public void insertBasicInfo(Basic_Info basic_info);

    /**
     * 将 求职意向 存入数据库
     * @param intent_info
     */
    public void insertIntentInfo(Intent_Info intent_info);

    /**
     * 将 教育/项目经历 存入数据库
     * @param exp_info
     */
    public void insertExperienceInfo(Exp_Info exp_info);

    /**
     * 将 自我评价 存入数据库
     * @param intro_info
     */
    public void insertIntroduceInfo(Intro_Info intro_info);

}
