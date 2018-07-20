/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost:3306
 Source Schema         : testdb

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : 65001

 Date: 20/07/2018 16:06:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text,
  `password` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for basic_info
-- ----------------------------
DROP TABLE IF EXISTS `basic_info`;
CREATE TABLE `basic_info` (
  `basic_id` int(10) NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8,
  `gender` text CHARACTER SET utf8,
  `age` int(10) DEFAULT NULL,
  `nation` text CHARACTER SET utf8,
  `city` text CHARACTER SET utf8,
  `tel` text CHARACTER SET utf8,
  `email` text CHARACTER SET utf8,
  `school` text CHARACTER SET utf8,
  `major` text CHARACTER SET utf8,
  `education` text CHARACTER SET utf8,
  `image` text,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`basic_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for exp_info
-- ----------------------------
DROP TABLE IF EXISTS `exp_info`;
CREATE TABLE `exp_info` (
  `exp_id` int(20) NOT NULL AUTO_INCREMENT,
  `edu_exp` text CHARACTER SET utf8,
  `project_exp` text CHARACTER SET utf8,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`exp_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for intent_info
-- ----------------------------
DROP TABLE IF EXISTS `intent_info`;
CREATE TABLE `intent_info` (
  `intent_id` int(20) NOT NULL AUTO_INCREMENT,
  `position` text CHARACTER SET utf8,
  `job_type` text CHARACTER SET utf8,
  `work_city` text CHARACTER SET utf8,
  `salary` text CHARACTER SET utf8,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`intent_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for intro_info
-- ----------------------------
DROP TABLE IF EXISTS `intro_info`;
CREATE TABLE `intro_info` (
  `intro_id` int(20) NOT NULL AUTO_INCREMENT,
  `introduce` text CHARACTER SET utf8,
  `user_id` int(20) NOT NULL,
  PRIMARY KEY (`intro_id`,`user_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for user_resume
-- ----------------------------
DROP TABLE IF EXISTS `user_resume`;
CREATE TABLE `user_resume` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `resume_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;
