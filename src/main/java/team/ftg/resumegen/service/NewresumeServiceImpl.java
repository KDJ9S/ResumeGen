package team.ftg.resumegen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team.ftg.resumegen.dao.NewresumeDao;
import team.ftg.resumegen.entity.Basic_Info;
import team.ftg.resumegen.entity.Exp_Info;
import team.ftg.resumegen.entity.Intent_Info;
import team.ftg.resumegen.entity.Intro_Info;

import java.util.List;


@Service
@Transactional
public class NewresumeServiceImpl implements NewresumeService {

    @Autowired
    public NewresumeDao newresumeDao;


    /**
     * 将 基础信息 存入数据库
     * @param basic_info
     */
    @Override
    public void insertBasicInfo(Basic_Info basic_info) {

        newresumeDao.insertBasicInfo(basic_info);

    }

    /**
     * 将 求职意向 存入数据库
     * @param intent_info
     */
    @Override
    public void insertIntentInfo(Intent_Info intent_info) {

        newresumeDao.insertIntentInfo(intent_info);
    }

    /**
     * 将 教育/项目经历 存入数据库
     * @param exp_info
     */
    @Override
    public void insertExperienceInfo(Exp_Info exp_info) {

        newresumeDao.insertExperienceInfo(exp_info);
    }

    /**
     * 将 自我评价 存入数据库
     * @param intro_info
     */
    @Override
    public void insertIntroduceInfo(Intro_Info intro_info) {

        newresumeDao.insertIntroduceInfo(intro_info);
    }

    /**
     * 从数据库获取 基本信息
     * @param user_id
     * @return
     */
    @Override
    public Basic_Info getBasicInfo(int user_id) {

        return newresumeDao.getBasicInfo(user_id);
    }

    /**
     * 从数据库获取 求职信息
     * @param user_id
     * @return
     */
    @Override
    public Intent_Info getIntentInfo(int user_id) {

        return newresumeDao.getIntentInfo(user_id);
    }

    /**
     * 从数据库获取 教育/项目经历
     * @param user_id
     * @return
     */
    @Override
    public Exp_Info getExperienceInfo(int user_id) {

        return newresumeDao.getExperienceInfo(user_id);
    }

    /**
     * 从数据库获取 自我评价
     * @param user_id
     * @return
     */
    @Override
    public Intro_Info getIntroduceInfo(int user_id) {

        return newresumeDao.getIntroduceInfo(user_id);
    }

    /**
     * 查询是否已经填写过简历需要的信息
     * @param user_id
     * @return true:填写过了  false:还没填写过
     */
    @Override
    public boolean checkStatus(int user_id) {
        Basic_Info bi = newresumeDao.checkStatus(user_id);
        return bi != null;
    }


}
