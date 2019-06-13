/*
SQLyog Ultimate v11.27 (32 bit)
MySQL - 5.7.24-0ubuntu0.16.04.1 : Database - tourism_sys
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`tourism_sys` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

USE `tourism_sys`;

/*Table structure for table `areas` */

DROP TABLE IF EXISTS `areas`;

CREATE TABLE `areas` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '地域名',
  `content` varchar(255) NOT NULL COMMENT '描述',
  `status` varchar(255) NOT NULL COMMENT '状态(0:正常,1:已删除)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `guideline_id` int(11) NOT NULL COMMENT '攻略id',
  `guideline_title` varchar(255) NOT NULL COMMENT '攻略标题',
  `guideline_url` varchar(255) NOT NULL COMMENT '攻略地址',
  `author` varchar(255) NOT NULL COMMENT '评论人',
  `content` varchar(2000) NOT NULL COMMENT '评论内容',
  `status` varchar(255) NOT NULL COMMENT '状态(0:正常,1:已删除)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `guidelines` */

DROP TABLE IF EXISTS `guidelines`;

CREATE TABLE `guidelines` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL COMMENT '标题',
  `author` varchar(255) NOT NULL COMMENT '作者',
  `content` text NOT NULL COMMENT '正文',
  `status` varchar(255) NOT NULL COMMENT '状态(0:正常,1:已删除)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `messages` */

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) NOT NULL COMMENT '父留言id',
  `author` varchar(255) NOT NULL COMMENT '留言人',
  `content` varchar(2000) NOT NULL COMMENT '留言内容',
  `type` varchar(255) NOT NULL COMMENT '类型(0:为回复,1:已回复)',
  `status` varchar(255) NOT NULL COMMENT '状态(0:正常,1:已删除)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `nodes` */

DROP TABLE IF EXISTS `nodes`;

CREATE TABLE `nodes` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '权限节点名',
  `code` varchar(255) NOT NULL COMMENT '权限节点编号,如001,01001',
  `pid` mediumint(9) NOT NULL COMMENT '父级节点id',
  `depth` varchar(255) NOT NULL COMMENT '菜单层级,一级菜单1,二级菜单2,页面3',
  `path` varchar(255) NOT NULL COMMENT '权限节点路径',
  `type` varchar(255) NOT NULL COMMENT '节点类型(0:menu,1:button,2:api)',
  `sort_factor` varchar(255) NOT NULL COMMENT '排序因子(越小越靠前)',
  `icon` varchar(255) NOT NULL COMMENT '菜单图标class名称',
  `status` varchar(255) NOT NULL COMMENT '状态(0:正常,1:已删除)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `spots` */

DROP TABLE IF EXISTS `spots`;

CREATE TABLE `spots` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `area_id` int(11) NOT NULL COMMENT '地域id',
  `area_name` varchar(255) NOT NULL COMMENT '地域名',
  `name` varchar(255) NOT NULL COMMENT '景点名',
  `content` text NOT NULL COMMENT '描述',
  `status` varchar(255) NOT NULL COMMENT '状态(0:正常,1:已删除)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `nickname` varchar(255) NOT NULL DEFAULT '' COMMENT '昵称',
  `sex` tinyint(4) NOT NULL DEFAULT '2' COMMENT '性别(0:女,1:男,2:保密)',
  `phone` varchar(255) NOT NULL DEFAULT '' COMMENT '手机号',
  `city` varchar(255) NOT NULL DEFAULT '' COMMENT '城市',
  `salt` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL COMMENT '密码',
  `type` varchar(255) NOT NULL COMMENT '类型(0:普通用户,1:管理员)',
  `status` varchar(255) NOT NULL COMMENT '状态(0:正常,1:禁用)',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
