package team.ftg.resumegen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team.ftg.resumegen.dao.NewresumeDao;
import team.ftg.resumegen.entity.Basic_Info;
import team.ftg.resumegen.entity.Exp_Info;
import team.ftg.resumegen.entity.Intent_Info;
import team.ftg.resumegen.entity.Intro_Info;


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

}
