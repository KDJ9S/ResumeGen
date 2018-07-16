/*
 Navicat Premium Data Transfer

 Source Server         : Conn
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : testdb

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 16/07/2018 19:03:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for basic_info
-- ----------------------------
DROP TABLE IF EXISTS `basic_info`;
CREATE TABLE `basic_info` (
  `basic_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `gender` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `age` int(10) DEFAULT NULL,
  `nation` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `city` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `tel` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `email` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `school` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `major` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `education` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`basic_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for exp_info
-- ----------------------------
DROP TABLE IF EXISTS `exp_info`;
CREATE TABLE `exp_info` (
  `exp_id` int(20) NOT NULL AUTO_INCREMENT,
  `edu_exp` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `project_exp` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`exp_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for intent_info
-- ----------------------------
DROP TABLE IF EXISTS `intent_info`;
CREATE TABLE `intent_info` (
  `intent_id` int(20) NOT NULL AUTO_INCREMENT,
  `position` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `job_type` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `work_city` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `salary` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`intent_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for intro_info
-- ----------------------------
DROP TABLE IF EXISTS `intro_info`;
CREATE TABLE `intro_info` (
  `intro_id` int(20) NOT NULL AUTO_INCREMENT,
  `introduce` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`intro_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text,
  `password` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user_resume
-- ----------------------------
DROP TABLE IF EXISTS `user_resume`;
CREATE TABLE `user_resume` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `resume_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
