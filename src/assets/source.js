export const resources = [
    {
        "id": 1,
        "name": "首页",
        "code": "index",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 2,
                "name": "系统首页",
                "code": "system-index",
                "type": "MENU",
                "parentId": 1,
                "path": "1",
                "children": null,
                "own": 0
            },
            {
                "id": 3,
                "name": "账户设置",
                "code": "account-setting",
                "type": "MENU",
                "parentId": 1,
                "path": "1",
                "children": [
                    {
                        "id": 4,
                        "name": "提交",
                        "code": "account-setting-submit",
                        "type": "BUTTON",
                        "parentId": 3,
                        "path": "1-3",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 5,
        "name": "用户",
        "code": "user",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 3541,
                "name": "用户流量分析菜单",
                "code": "user:gprs:analysis:menu",
                "type": "MENU",
                "parentId": 5,
                "path": "5",
                "children": null,
                "own": 0
            },
            {
                "id": 3568,
                "name": "车联网应用",
                "code": "vehicle:mobile-app-mgmt",
                "type": "MENU",
                "parentId": 5,
                "path": "5",
                "children": null,
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 12,
        "name": "订单",
        "code": "business",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 22,
                "name": "预售单管理",
                "code": "business-presell",
                "type": "MENU",
                "parentId": 12,
                "path": "12",
                "children": [
                    {
                        "id": 23,
                        "name": "查询",
                        "code": "preorder-search",
                        "type": "BUTTON",
                        "parentId": 22,
                        "path": "12-22",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 25,
                        "name": "查看",
                        "code": "presell-infor-edit",
                        "type": "BUTTON",
                        "parentId": 22,
                        "path": "12-22",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 269,
                        "name": "订单统计",
                        "code": "preorder-status-count",
                        "type": "BUTTON",
                        "parentId": 22,
                        "path": "12-22",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 68,
        "name": "内容",
        "code": "substance",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 3022,
                "name": "维保手册",
                "code": "substance:maintenance-manual",
                "type": "MENU",
                "parentId": 68,
                "path": "68",
                "children": [
                    {
                        "id": 3023,
                        "name": "维保手册列表查询",
                        "code": "substance:maintenance-manual:list",
                        "type": "BUTTON",
                        "parentId": 3022,
                        "path": "68-3022",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3024,
                        "name": "维保手册明细查询",
                        "code": "substance:maintenance-manual:detail",
                        "type": "BUTTON",
                        "parentId": 3022,
                        "path": "68-3022",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3025,
                        "name": "维保手册新增",
                        "code": "substance:maintenance-manual:add",
                        "type": "BUTTON",
                        "parentId": 3022,
                        "path": "68-3022",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3026,
                        "name": "维保手册修改",
                        "code": "substance:maintenance-manual:update",
                        "type": "BUTTON",
                        "parentId": 3022,
                        "path": "68-3022",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3078,
                "name": "大屏机广告",
                "code": "screen-banner-list",
                "type": "MENU",
                "parentId": 68,
                "path": "68",
                "children": [
                    {
                        "id": 3079,
                        "name": "大屏机广告列表查询",
                        "code": "screen-banner-list-search",
                        "type": "BUTTON",
                        "parentId": 3078,
                        "path": "68-3078",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3092,
                        "name": "大屏机广告新增",
                        "code": "screen-banner-add",
                        "type": "BUTTON",
                        "parentId": 3078,
                        "path": "68-3078",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3093,
                        "name": "大屏机广告编辑",
                        "code": "screen-banner-edit",
                        "type": "BUTTON",
                        "parentId": 3078,
                        "path": "68-3078",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 80,
        "name": "消息",
        "code": "message",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 81,
                "name": "发送消息",
                "code": "news-built",
                "type": "MENU",
                "parentId": 80,
                "path": "80",
                "children": [
                    {
                        "id": 538,
                        "name": " 批量导入",
                        "code": "news-built-import",
                        "type": "BUTTON",
                        "parentId": 81,
                        "path": "80-81",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 83,
                "name": "消息记录",
                "code": "news-record",
                "type": "MENU",
                "parentId": 80,
                "path": "80",
                "children": [
                    {
                        "id": 84,
                        "name": "查询",
                        "code": "news-record-search",
                        "type": "BUTTON",
                        "parentId": 83,
                        "path": "80-83",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 85,
                        "name": "添加",
                        "code": "news-record-add",
                        "type": "BUTTON",
                        "parentId": 83,
                        "path": "80-83",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 86,
                        "name": "重发",
                        "code": "news-built-edit",
                        "type": "BUTTON",
                        "parentId": 83,
                        "path": "80-83",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 255,
                "name": "大屏机消息",
                "code": "screen-built",
                "type": "MENU",
                "parentId": 80,
                "path": "80",
                "children": [
                    {
                        "id": 256,
                        "name": "发送",
                        "code": "screen-built-send",
                        "type": "BUTTON",
                        "parentId": 255,
                        "path": "80-255",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 541,
                        "name": "获取大屏机消息推送车辆列表",
                        "code": "push-trucks",
                        "type": "BUTTON",
                        "parentId": 255,
                        "path": "80-255",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 542,
                        "name": "大屏机消息推送导入",
                        "code": "push-truck-import",
                        "type": "BUTTON",
                        "parentId": 255,
                        "path": "80-255",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 543,
                        "name": "大屏机消息推送导入模板下载",
                        "code": "push-truck-template",
                        "type": "BUTTON",
                        "parentId": 255,
                        "path": "80-255",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 761,
                        "name": "导出大屏机消息车辆",
                        "code": "push-truck-byarea-export",
                        "type": "BUTTON",
                        "parentId": 255,
                        "path": "80-255",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 7025,
                "name": "反馈查询",
                "code": "public:feedback:index",
                "type": "MENU",
                "parentId": 80,
                "path": "80",
                "children": [
                    {
                        "id": 7026,
                        "name": "查看详情",
                        "code": "public:feedback:detail",
                        "type": "BUTTON",
                        "parentId": 7025,
                        "path": "80-7025",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7027,
                        "name": "导出反馈",
                        "code": "public:feedback:export",
                        "type": "BUTTON",
                        "parentId": 7025,
                        "path": "80-7025",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7028,
                        "name": "转办反馈",
                        "code": "public:feedback:transmit",
                        "type": "BUTTON",
                        "parentId": 7025,
                        "path": "80-7025",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7029,
                        "name": "回复反馈",
                        "code": "public:feedback:reply",
                        "type": "BUTTON",
                        "parentId": 7025,
                        "path": "80-7025",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7030,
                        "name": "申请关闭",
                        "code": "public:feedback:apply-close",
                        "type": "BUTTON",
                        "parentId": 7025,
                        "path": "80-7025",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 7040,
                "name": "工单类型",
                "code": "issue-type-manage",
                "type": "MENU",
                "parentId": 80,
                "path": "80",
                "children": [
                    {
                        "id": 7041,
                        "name": "查询",
                        "code": "issue-type-query",
                        "type": "BUTTON",
                        "parentId": 7040,
                        "path": "80-7040",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7042,
                        "name": "查看",
                        "code": "issue-type-view",
                        "type": "BUTTON",
                        "parentId": 7040,
                        "path": "80-7040",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7043,
                        "name": "添加",
                        "code": "issue-type-add",
                        "type": "BUTTON",
                        "parentId": 7040,
                        "path": "80-7040",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7044,
                        "name": "修改",
                        "code": "issue-type-modify",
                        "type": "BUTTON",
                        "parentId": 7040,
                        "path": "80-7040",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7045,
                        "name": "删除",
                        "code": "issue-type-delete",
                        "type": "BUTTON",
                        "parentId": 7040,
                        "path": "80-7040",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 92,
        "name": "系统",
        "code": "system",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 93,
                "name": "部门管理",
                "code": "system-branch",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 94,
                        "name": "查询",
                        "code": "system-branch-search",
                        "type": "BUTTON",
                        "parentId": 93,
                        "path": "92-93",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 95,
                        "name": "添加",
                        "code": "system-branch-add",
                        "type": "BUTTON",
                        "parentId": 93,
                        "path": "92-93",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 96,
                        "name": "编辑",
                        "code": "system-branch-edit",
                        "type": "BUTTON",
                        "parentId": 93,
                        "path": "92-93",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 97,
                        "name": "删除",
                        "code": "system-branch-delete",
                        "type": "BUTTON",
                        "parentId": 93,
                        "path": "92-93",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 377,
                "name": "操作日志",
                "code": "system-operate-log",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 378,
                        "name": "查询",
                        "code": "system-operate-log-search",
                        "type": "BUTTON",
                        "parentId": 377,
                        "path": "92-377",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 379,
                        "name": "导出",
                        "code": "system-operate-log-export",
                        "type": "BUTTON",
                        "parentId": 377,
                        "path": "92-377",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3001,
                "name": "高密采集配置",
                "code": "high-collection",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 3002,
                        "name": "获取密集采集配置",
                        "code": "get-high-collection",
                        "type": "BUTTON",
                        "parentId": 3001,
                        "path": "92-3001",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3003,
                        "name": "获取密集采集基础配置数据",
                        "code": "get-base-high-collection",
                        "type": "BUTTON",
                        "parentId": 3001,
                        "path": "92-3001",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3004,
                        "name": "设置密集采集",
                        "code": "post-high-collection",
                        "type": "BUTTON",
                        "parentId": 3001,
                        "path": "92-3001",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3005,
                        "name": "车联网操作日志",
                        "code": "operating-log",
                        "type": "MENU",
                        "parentId": 3001,
                        "path": "92-3001",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3011,
                "name": "关重件同步日志",
                "code": "system:mes-log",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 3012,
                        "name": "关重件同步日志查询",
                        "code": "system:mes-log:query",
                        "type": "BUTTON",
                        "parentId": 3011,
                        "path": "92-3011",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3013,
                        "name": "关重件同步日志处理",
                        "code": "system:mes-log:update",
                        "type": "BUTTON",
                        "parentId": 3011,
                        "path": "92-3011",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3015,
                "name": "大屏二维码配置",
                "code": "system:qr-code-config",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 3016,
                        "name": "大屏二维码默认配置查询",
                        "code": "system:qr-code-config:find-default-qr-info",
                        "type": "BUTTON",
                        "parentId": 3015,
                        "path": "92-3015",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3017,
                        "name": "大屏二维码默认配置修改",
                        "code": "system:qr-code-config:save-default-qr-info",
                        "type": "BUTTON",
                        "parentId": 3015,
                        "path": "92-3015",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3018,
                        "name": "大屏二维码对应地区配置条件查询",
                        "code": "system:qr-code-config:find-qr-code-addr-mapping",
                        "type": "BUTTON",
                        "parentId": 3015,
                        "path": "92-3015",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3019,
                        "name": "大屏二维码对应地区配置按id查询",
                        "code": "system:qr-code-config:find-by-id",
                        "type": "BUTTON",
                        "parentId": 3015,
                        "path": "92-3015",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3020,
                        "name": "大屏二维码对应地区配置新增或修改",
                        "code": "system:qr-code-config:add-or-update",
                        "type": "BUTTON",
                        "parentId": 3015,
                        "path": "92-3015",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3021,
                        "name": "大屏二维码对应地区配置删除",
                        "code": "system:qr-code-config:delete",
                        "type": "BUTTON",
                        "parentId": 3015,
                        "path": "92-3015",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3027,
                "name": "车型码配置",
                "code": "system:truck-model-config",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 3028,
                        "name": "车型码配置列表",
                        "code": "system:truck-model-config:list",
                        "type": "BUTTON",
                        "parentId": 3027,
                        "path": "92-3027",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3029,
                        "name": "车型码配置按id查询",
                        "code": "system:truck-model-config:query-by-id",
                        "type": "BUTTON",
                        "parentId": 3027,
                        "path": "92-3027",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3030,
                        "name": "车型码配置新增或修改",
                        "code": "system:truck-model-config:add-or-update",
                        "type": "BUTTON",
                        "parentId": 3027,
                        "path": "92-3027",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3031,
                        "name": "车型码配置属性查询",
                        "code": "system:truck-model-config:get-property",
                        "type": "BUTTON",
                        "parentId": 3027,
                        "path": "92-3027",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3042,
                        "name": "车型码配置导出",
                        "code": "system:truck-model-config:export",
                        "type": "BUTTON",
                        "parentId": 3027,
                        "path": "92-3027",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3037,
                "name": "电子围栏设置",
                "code": "system:electronic-fence",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 3038,
                        "name": "电子围栏列表",
                        "code": "system:electronic-fence:list",
                        "type": "BUTTON",
                        "parentId": 3037,
                        "path": "92-3037",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3039,
                        "name": "电子围栏新增或修改",
                        "code": "system:electronic-fence:addorupdate",
                        "type": "BUTTON",
                        "parentId": 3037,
                        "path": "92-3037",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3040,
                        "name": "电子围栏明细查询",
                        "code": "system:electronic-fence:detail",
                        "type": "BUTTON",
                        "parentId": 3037,
                        "path": "92-3037",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3041,
                        "name": "电子围栏删除",
                        "code": "system:electronic-fence:delete",
                        "type": "BUTTON",
                        "parentId": 3037,
                        "path": "92-3037",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 10069,
                "name": "权限管理",
                "code": "authority-manage",
                "type": "MENU",
                "parentId": 92,
                "path": "92",
                "children": [
                    {
                        "id": 10072,
                        "name": "菜单权限",
                        "code": "menu-permissions",
                        "type": "MENU",
                        "parentId": 10069,
                        "path": "92-10069",
                        "children": [
                            {
                                "id": 10084,
                                "name": "菜单列表",
                                "code": "menu-permissions:list",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10085,
                                "name": "菜单详情",
                                "code": "menu-permissions:detail",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10086,
                                "name": "菜单新增",
                                "code": "menu-permissions:add",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10087,
                                "name": "菜单修改",
                                "code": "menu-permissions:update",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10088,
                                "name": "菜单发布",
                                "code": "menu-permissions:flush",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10089,
                                "name": "菜单删除",
                                "code": "menu-permissions:delete",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10090,
                                "name": "菜单排序",
                                "code": "menu-permissions:sort",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10105,
                                "name": "菜单查询角色列表",
                                "code": "menu-permissions:group:list",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10106,
                                "name": "菜单关联角色列表",
                                "code": "menu-permissions:group:add",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10107,
                                "name": "菜单移除关联角色",
                                "code": "menu-permissions:group:delete",
                                "type": "BUTTON",
                                "parentId": 10072,
                                "path": "92-10069-10072",
                                "children": null,
                                "own": 0
                            }
                        ],
                        "own": 0
                    },
                    {
                        "id": 10073,
                        "name": "角色管理",
                        "code": "role-management",
                        "type": "MENU",
                        "parentId": 10069,
                        "path": "92-10069",
                        "children": [
                            {
                                "id": 10076,
                                "name": "角色查询",
                                "code": "role-management:query",
                                "type": "BUTTON",
                                "parentId": 10073,
                                "path": "92-10069-10073",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10091,
                                "name": "角色新增",
                                "code": "role-management:add",
                                "type": "BUTTON",
                                "parentId": 10073,
                                "path": "92-10069-10073",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10092,
                                "name": "角色修改",
                                "code": "role-management:update",
                                "type": "BUTTON",
                                "parentId": 10073,
                                "path": "92-10069-10073",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10093,
                                "name": "角色详情",
                                "code": "role-management:detail",
                                "type": "BUTTON",
                                "parentId": 10073,
                                "path": "92-10069-10073",
                                "children": null,
                                "own": 0
                            }
                        ],
                        "own": 0
                    },
                    {
                        "id": 10074,
                        "name": "终端管理",
                        "code": "terminal-management",
                        "type": "MENU",
                        "parentId": 10069,
                        "path": "92-10069",
                        "children": [
                            {
                                "id": 10094,
                                "name": "终端新增",
                                "code": "terminal-management:add",
                                "type": "BUTTON",
                                "parentId": 10074,
                                "path": "92-10069-10074",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10095,
                                "name": "终端修改",
                                "code": "terminal-management:update",
                                "type": "BUTTON",
                                "parentId": 10074,
                                "path": "92-10069-10074",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10096,
                                "name": "终端详情",
                                "code": "terminal-management:detail",
                                "type": "BUTTON",
                                "parentId": 10074,
                                "path": "92-10069-10074",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10097,
                                "name": "终端列表",
                                "code": "terminal-management:list",
                                "type": "BUTTON",
                                "parentId": 10074,
                                "path": "92-10069-10074",
                                "children": null,
                                "own": 0
                            }
                        ],
                        "own": 0
                    },
                    {
                        "id": 10075,
                        "name": "预置角色",
                        "code": "preset-role",
                        "type": "MENU",
                        "parentId": 10069,
                        "path": "92-10069",
                        "children": [
                            {
                                "id": 10098,
                                "name": "预置角色编辑",
                                "code": "preset-role:edit",
                                "type": "BUTTON",
                                "parentId": 10075,
                                "path": "92-10069-10075",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10099,
                                "name": "公司模块预置角色列表",
                                "code": "preset-role:exist:list",
                                "type": "BUTTON",
                                "parentId": 10075,
                                "path": "92-10069-10075",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10100,
                                "name": "预置角色列表",
                                "code": "preset-role:list",
                                "type": "BUTTON",
                                "parentId": 10075,
                                "path": "92-10069-10075",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10101,
                                "name": "预置角色详情",
                                "code": "preset-role:detail",
                                "type": "BUTTON",
                                "parentId": 10075,
                                "path": "92-10069-10075",
                                "children": null,
                                "own": 0
                            },
                            {
                                "id": 10102,
                                "name": "公司类型",
                                "code": "preset-role:org:categorys",
                                "type": "BUTTON",
                                "parentId": 10075,
                                "path": "92-10069-10075",
                                "children": null,
                                "own": 0
                            }
                        ],
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 285,
        "name": "车辆",
        "code": "vehicle",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 286,
                "name": "车辆管理",
                "code": "vehicle-manage",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 317,
                        "name": "查询",
                        "code": "vehicle-manage-search",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 318,
                        "name": "查看",
                        "code": "vehicle-view",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 319,
                        "name": "新增",
                        "code": "vehicle-add",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 320,
                        "name": "编辑",
                        "code": "vehicle-edit",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 321,
                        "name": "删除",
                        "code": "vehicle-delete",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 322,
                        "name": "批量导入",
                        "code": "vehicle-import",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 323,
                        "name": "导出",
                        "code": "vehicle-export",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 436,
                        "name": "回库",
                        "code": "truck-back",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 475,
                        "name": "审核",
                        "code": "vehicle-audit",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 476,
                        "name": "审核记录",
                        "code": "vehicle-audit-log",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 477,
                        "name": "车主信息查看",
                        "code": "vehicle-user-view",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 540,
                        "name": "批量开通远控",
                        "code": "vehicle-batch-enable-remote",
                        "type": "BUTTON",
                        "parentId": 286,
                        "path": "285-286",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 298,
                "name": "故障诊断",
                "code": "fault-diagnosis",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 299,
                        "name": "查询",
                        "code": "fault-diagnosis-search",
                        "type": "BUTTON",
                        "parentId": 298,
                        "path": "285-298",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300,
                        "name": "导出",
                        "code": "fault-diagnosis-export",
                        "type": "BUTTON",
                        "parentId": 298,
                        "path": "285-298",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 301,
                        "name": "查看详情",
                        "code": "fault-diagnosis-detail",
                        "type": "BUTTON",
                        "parentId": 298,
                        "path": "285-298",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 302,
                "name": "故障码配置",
                "code": "fault-code-config",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 303,
                        "name": "查询配置列表",
                        "code": "fault-code-config-search",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 304,
                        "name": "导入故障码",
                        "code": "fault-code-import",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 305,
                        "name": "故障码详情",
                        "code": "fault-code-detail",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 306,
                        "name": "新增故障码",
                        "code": "fault-code-add",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 307,
                        "name": "删除配置",
                        "code": "fault-code-config-delete",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 308,
                        "name": "查询详情列表",
                        "code": "fault-code-detail-search",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 309,
                        "name": "查看详情",
                        "code": "fault-code-detail-view",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 310,
                        "name": "编辑故障码",
                        "code": "fault-code-edit",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 311,
                        "name": "删除故障码",
                        "code": "fault-code-delete",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 344,
                        "name": "下载模板",
                        "code": "fault-code-export",
                        "type": "BUTTON",
                        "parentId": 302,
                        "path": "285-302",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 312,
                "name": "通知规则",
                "code": "notification-rules",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 313,
                        "name": "新建",
                        "code": "notification-rules-add",
                        "type": "BUTTON",
                        "parentId": 312,
                        "path": "285-312",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 314,
                        "name": "编辑",
                        "code": "notification-rules-edit",
                        "type": "BUTTON",
                        "parentId": 312,
                        "path": "285-312",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 315,
                        "name": "删除",
                        "code": "notification-rules-delete",
                        "type": "BUTTON",
                        "parentId": 312,
                        "path": "285-312",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 346,
                        "name": "详情",
                        "code": "notification-rules-detail",
                        "type": "BUTTON",
                        "parentId": 312,
                        "path": "285-312",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 316,
                "name": "提醒管理",
                "code": "maintenance-config",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 287,
                        "name": "规则配置-创建",
                        "code": "maintenance-config-create",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 288,
                        "name": "规则配置-编辑",
                        "code": "maintenance-config-edit",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 289,
                        "name": "规则配置-删除",
                        "code": "maintenance-config-destroy",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 290,
                        "name": "提醒管理-条目配置",
                        "code": "maintenance-config-item",
                        "type": "MENU",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 291,
                        "name": "条目配置-创建",
                        "code": "maintenance-config-item-create",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 292,
                        "name": "条目配置-编辑",
                        "code": "maintenance-config-item-edit",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 293,
                        "name": "条目配置-删除",
                        "code": "maintenance-config-item-destroy",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 294,
                        "name": "规则配置-搜索",
                        "code": "maintenance-config-search",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 295,
                        "name": "条目配置-搜索",
                        "code": "maintenance-config-item-search",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 296,
                        "name": "条目配置-提醒条目列表",
                        "code": "maintenance-config-items",
                        "type": "MENU",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 297,
                        "name": "条目配置-车型列表",
                        "code": "maintenance-config-truck-models",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3211,
                        "name": "规则配置-查看",
                        "code": "maintenance-config-detail",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3212,
                        "name": "规则配置-提醒类型",
                        "code": "maintenance-config-message-type",
                        "type": "BUTTON",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3213,
                        "name": "推送记录",
                        "code": "msg-push-record-list",
                        "type": "MENU",
                        "parentId": 316,
                        "path": "285-316",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 347,
                "name": "紧急电话配置",
                "code": "emergency-phone",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 348,
                        "name": "紧急电话列表",
                        "code": "vehicle-emergency-phone-list",
                        "type": "BUTTON",
                        "parentId": 347,
                        "path": "285-347",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 349,
                        "name": "紧急电话搜索",
                        "code": "vehicle-emergency-phone-search",
                        "type": "BUTTON",
                        "parentId": 347,
                        "path": "285-347",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 350,
                        "name": "新增紧急电话",
                        "code": "vehicle-emergency-phone-create",
                        "type": "BUTTON",
                        "parentId": 347,
                        "path": "285-347",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 351,
                        "name": "编辑紧急电话",
                        "code": "vehicle-emergency-phone-edit",
                        "type": "BUTTON",
                        "parentId": 347,
                        "path": "285-347",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 352,
                        "name": "删除紧急电话",
                        "code": "vehicle-emergency-phone-destroy",
                        "type": "BUTTON",
                        "parentId": 347,
                        "path": "285-347",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 353,
                        "name": "查看紧急电话详情",
                        "code": "vehicle-emergency-phone-show",
                        "type": "BUTTON",
                        "parentId": 347,
                        "path": "285-347",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 358,
                "name": "车辆监控",
                "code": "vehicle-monitor",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 359,
                        "name": "地图展示",
                        "code": "vehicle-monitor-map",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 360,
                        "name": "地图详情",
                        "code": "vehicle-monitor-map-detail",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 361,
                        "name": "查询",
                        "code": "vehicle-monitor-search",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 362,
                        "name": "基本信息",
                        "code": "vehicle-monitor-basic-info",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 363,
                        "name": "实时在途",
                        "code": "vehicle-monitor-in-transit",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 364,
                        "name": "在途重现",
                        "code": "vehicle-monitor-reappear-way",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 365,
                        "name": "导出轨迹",
                        "code": "vehicle-monitor-export-track",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 366,
                        "name": "实时车况",
                        "code": "vehicle-monitor-truck-status",
                        "type": "BUTTON",
                        "parentId": 358,
                        "path": "285-358",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 550,
                "name": "低电压告警",
                "code": "truck-alarm",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 551,
                        "name": "低电压告警导出",
                        "code": "truck-alarm-export",
                        "type": "BUTTON",
                        "parentId": 550,
                        "path": "285-550",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 795,
                "name": "车辆库存",
                "code": "vehicle-statistics",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 796,
                        "name": "车辆库存列表查询",
                        "code": "vehicle-statistics-search",
                        "type": "BUTTON",
                        "parentId": 795,
                        "path": "285-795",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 797,
                        "name": "车辆筛选属性",
                        "code": "get-model-stock-property",
                        "type": "BUTTON",
                        "parentId": 795,
                        "path": "285-795",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 798,
                        "name": "车辆库存数据导出",
                        "code": "vehicle-statistics-export",
                        "type": "BUTTON",
                        "parentId": 795,
                        "path": "285-795",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 991,
                "name": "电子围栏",
                "code": "electronicFence",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 988,
                        "name": "电子围栏列表查询",
                        "code": "queryAllElectronicFence",
                        "type": "BUTTON",
                        "parentId": 991,
                        "path": "285-991",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 989,
                        "name": "电子围栏导出",
                        "code": "exportElectronicFence",
                        "type": "BUTTON",
                        "parentId": 991,
                        "path": "285-991",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3032,
                "name": "环保信息单管理",
                "code": "vehicle-manage:environmental",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3033,
                        "name": "查询环保信息属性列表",
                        "code": "vehicle-manage:environmental:get-properties",
                        "type": "BUTTON",
                        "parentId": 3032,
                        "path": "285-3032",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3034,
                        "name": "查询环保信息",
                        "code": "vehicle-manage:environmental:get-info",
                        "type": "BUTTON",
                        "parentId": 3032,
                        "path": "285-3032",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3035,
                        "name": "导出环保信息",
                        "code": "vehicle-manage:environmental:export",
                        "type": "BUTTON",
                        "parentId": 3032,
                        "path": "285-3032",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3036,
                        "name": "同步环保信息到本地",
                        "code": "vehicle-manage:environmental:syn-info",
                        "type": "BUTTON",
                        "parentId": 3032,
                        "path": "285-3032",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3044,
                "name": "最新告警",
                "code": "vehicle:battery-manage:new",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3045,
                        "name": "查询",
                        "code": "vehicle:battery-manage:new:search",
                        "type": "BUTTON",
                        "parentId": 3044,
                        "path": "285-3044",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3051,
                        "name": "导出",
                        "code": "vehicle:battery-manage:new:export",
                        "type": "BUTTON",
                        "parentId": 3044,
                        "path": "285-3044",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3046,
                "name": "统计分析",
                "code": "vehicle:battery-manage:statics",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3047,
                        "name": "统计",
                        "code": "vehicle:battery-manage:statics:statics",
                        "type": "BUTTON",
                        "parentId": 3046,
                        "path": "285-3046",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3048,
                        "name": "查询",
                        "code": "vehicle:battery-manage:statics:search",
                        "type": "BUTTON",
                        "parentId": 3046,
                        "path": "285-3046",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3050,
                        "name": "导出",
                        "code": "vehicle:battery-manage:statics:export",
                        "type": "BUTTON",
                        "parentId": 3046,
                        "path": "285-3046",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3566,
                        "name": "蓄电池top5",
                        "code": "vehicle:battery-manage:top5",
                        "type": "MENU",
                        "parentId": 3046,
                        "path": "285-3046",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3567,
                        "name": "蓄电池轨迹图",
                        "code": "vehicle:battery-manage:alarm-statics",
                        "type": "BUTTON",
                        "parentId": 3046,
                        "path": "285-3046",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3049,
                "name": "告警记录",
                "code": "vehicle:battery-manage:list",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3043,
                        "name": "查询",
                        "code": "vehicle:battery-manage:list:search",
                        "type": "BUTTON",
                        "parentId": 3049,
                        "path": "285-3049",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3052,
                        "name": "导出",
                        "code": "vehicle:battery-manage:list:export",
                        "type": "BUTTON",
                        "parentId": 3049,
                        "path": "285-3049",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3053,
                "name": "车辆位置",
                "code": "vehicle-location",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": null,
                "own": 0
            },
            {
                "id": 3061,
                "name": "Adas双预警",
                "code": "adas-double-forewarning",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3062,
                        "name": "查询",
                        "code": "adas-double-forewarning-list",
                        "type": "BUTTON",
                        "parentId": 3061,
                        "path": "285-3061",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3063,
                        "name": "详情",
                        "code": "adas-double-forewarning-detail",
                        "type": "BUTTON",
                        "parentId": 3061,
                        "path": "285-3061",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3064,
                        "name": "导出",
                        "code": "adas-double-forewarning-export",
                        "type": "BUTTON",
                        "parentId": 3061,
                        "path": "285-3061",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3065,
                "name": "新国5备案",
                "code": "vehicle-manage:g6check",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3066,
                        "name": "查询备案参数",
                        "code": "vehicle-manage:g6check:get-register-param",
                        "type": "BUTTON",
                        "parentId": 3065,
                        "path": "285-3065",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3067,
                        "name": "备案参数配置",
                        "code": "vehicle-manage:g6check:register-param",
                        "type": "BUTTON",
                        "parentId": 3065,
                        "path": "285-3065",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3068,
                        "name": "备案车辆列表",
                        "code": "vehicle-manage:g6check:list",
                        "type": "BUTTON",
                        "parentId": 3065,
                        "path": "285-3065",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3069,
                        "name": "备案-添加车辆",
                        "code": "vehicle-manage:g6check:add",
                        "type": "BUTTON",
                        "parentId": 3065,
                        "path": "285-3065",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3070,
                        "name": "车辆静态备案",
                        "code": "vehicle-manage:g6check:register",
                        "type": "BUTTON",
                        "parentId": 3065,
                        "path": "285-3065",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3071,
                        "name": "开启、关闭动态数据上传",
                        "code": "vehicle-manage:g6check:upload",
                        "type": "BUTTON",
                        "parentId": 3065,
                        "path": "285-3065",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3301,
                "name": "里程油耗分析",
                "code": "data-analysis:mileage-fuel:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3302,
                        "name": "里程油耗分析查询",
                        "code": "data-analysis:mileage-fuel:stat:mileage-time",
                        "type": "BUTTON",
                        "parentId": 3301,
                        "path": "285-3301",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3303,
                        "name": "里程油耗分析数据列表",
                        "code": "data-analysis:mileage-fuel:stat:list",
                        "type": "BUTTON",
                        "parentId": 3301,
                        "path": "285-3301",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3304,
                        "name": "里程油耗分析数据列表导出",
                        "code": "data-analysis:mileage-fuel:stat:export",
                        "type": "BUTTON",
                        "parentId": 3301,
                        "path": "285-3301",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3305,
                "name": "故障分析",
                "code": "data-analysis:fault-analysis:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3306,
                        "name": "故障分析筛选",
                        "code": "data-analysis:fault-analysis:fault-analysis-stat",
                        "type": "BUTTON",
                        "parentId": 3305,
                        "path": "285-3305",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3307,
                        "name": "故障部件下拉",
                        "code": "data-analysis:fault-analysis:fault-units-list",
                        "type": "VIEW",
                        "parentId": 3305,
                        "path": "285-3305",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3308,
                        "name": "故障部件筛选统计",
                        "code": "data-analysis:fault-analysis:fault-units-stat",
                        "type": "BUTTON",
                        "parentId": 3305,
                        "path": "285-3305",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3311,
                "name": "动力数据分析",
                "code": "data-analysis:engine-analysis:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3312,
                        "name": "动力数据分析车辆查询",
                        "code": "data-analysis:engine-analysis:fetch",
                        "type": "BUTTON",
                        "parentId": 3311,
                        "path": "285-3311",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3313,
                        "name": "动力数据分析对比",
                        "code": "data-analysis:engine-analysis:compare",
                        "type": "BUTTON",
                        "parentId": 3311,
                        "path": "285-3311",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3361,
                "name": "芯片型号备案菜单",
                "code": "g6check:chip-manage:register:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3362,
                        "name": "芯片型号备案列表刷新",
                        "code": "g6check:chip-manage:register:list",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3363,
                        "name": "芯片型号备案信息添加",
                        "code": "g6check:chip-manage:register:add-chip",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3364,
                        "name": "芯片型号备案",
                        "code": "g6check:chip-manage:register",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3365,
                        "name": "芯片型号备案结果查询",
                        "code": "g6check:chip-manage:register:result",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3366,
                        "name": "芯片标识符申请",
                        "code": "g6check:chip-manage:register:apply-prefix",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3367,
                        "name": "芯片标识符申请结果查询",
                        "code": "g6check:chip-manage:register:apply-prefix:result",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3368,
                        "name": "芯片型号备案记录删除",
                        "code": "g6check:chip-manage:register:delete",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3369,
                        "name": "芯片型号备案信息编辑",
                        "code": "g6check:chip-manage:register:update",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3370,
                        "name": "芯片型号备案信息详情",
                        "code": "g6check:chip-manage:register:detail",
                        "type": "BUTTON",
                        "parentId": 3361,
                        "path": "285-3361",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3371,
                "name": "终端型号备案菜单",
                "code": "g6check:tbox-manage:register:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3372,
                        "name": "终端型号备案列表刷新",
                        "code": "g6check:tbox-manage:register:list",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3373,
                        "name": "终端型号备案信息添加",
                        "code": "g6check:tbox-manage:register:add-tbox",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3374,
                        "name": "终端型号授权",
                        "code": "g6check:tbox-manage:register:authority",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3375,
                        "name": "终端型号授权备案结果查询",
                        "code": "g6check:tbox-manage:register:authority:result",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3376,
                        "name": "终端型号备案",
                        "code": "g6check:tbox-manage:register",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3377,
                        "name": "终端型号备案结果查询",
                        "code": "g6check:tbox-manage:register:result",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3378,
                        "name": "终端型号备案记录删除",
                        "code": "g6check:tbox-manage:register:delete",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3379,
                        "name": "终端型号备案信息编辑",
                        "code": "g6check:tbox-manage:register:update",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3380,
                        "name": "终端型号备案信息详情",
                        "code": "g6check:tbox-manage:register:detail",
                        "type": "BUTTON",
                        "parentId": 3371,
                        "path": "285-3371",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3381,
                "name": "排放数据菜单",
                "code": "g6check:emission-data:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3382,
                        "name": "动态数据查询",
                        "code": "g6check:emission-data:list",
                        "type": "BUTTON",
                        "parentId": 3381,
                        "path": "285-3381",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3531,
                "name": "故障统计",
                "code": "fault-stat",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": null,
                "own": 0
            },
            {
                "id": 3542,
                "name": "驾驶行为",
                "code": "vehicle-behavoir",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3543,
                        "name": "驾驶行为分析",
                        "code": "vehicle-behavior-analysis",
                        "type": "MENU",
                        "parentId": 3542,
                        "path": "285-3542",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3544,
                        "name": "参数设置",
                        "code": "vehicle-behavior-param-setting",
                        "type": "MENU",
                        "parentId": 3542,
                        "path": "285-3542",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3545,
                        "name": "保存",
                        "code": "vehicle-behavior-param-setting-edit1",
                        "type": "BUTTON",
                        "parentId": 3542,
                        "path": "285-3542",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3546,
                        "name": "保存",
                        "code": "vehicle-behavior-param-setting-deit2",
                        "type": "BUTTON",
                        "parentId": 3542,
                        "path": "285-3542",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3551,
                "name": "排放分析菜单",
                "code": "g6check:emission:analysis:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": null,
                "own": 0
            },
            {
                "id": 3553,
                "name": "气密性预警",
                "code": "vehicle-premaintain-airtightness",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3555,
                        "name": "气密性预警阈值保存",
                        "code": "vehicle-premaintain-airtightness-edit",
                        "type": "BUTTON",
                        "parentId": 3553,
                        "path": "285-3553",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3556,
                        "name": "气密性表导出",
                        "code": "vehicle-premaintain-airtightness-export",
                        "type": "BUTTON",
                        "parentId": 3553,
                        "path": "285-3553",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3557,
                        "name": "气密性列表",
                        "code": "vehicle-premaintain-airtightness-list",
                        "type": "BUTTON",
                        "parentId": 3553,
                        "path": "285-3553",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3558,
                        "name": "气密性统计",
                        "code": "vehicle-premaintain-airtightness-statistics",
                        "type": "BUTTON",
                        "parentId": 3553,
                        "path": "285-3553",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3569,
                "name": "尿素质量预警",
                "code": "vehicle-premaintain-ureaquality",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3570,
                        "name": "尿素质量查询",
                        "code": "vehicle-premaintain-ureaquality-list",
                        "type": "BUTTON",
                        "parentId": 3569,
                        "path": "285-3569",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3571,
                        "name": "尿素质量阈值保存",
                        "code": "vehicle-premaintain-ureaquality-edit",
                        "type": "BUTTON",
                        "parentId": 3569,
                        "path": "285-3569",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3572,
                        "name": "尿素质量导出",
                        "code": "vehicle-premaintain-ureaquality-export",
                        "type": "BUTTON",
                        "parentId": 3569,
                        "path": "285-3569",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3573,
                        "name": "尿素质量统计",
                        "code": "vehicle-premaintain-ureaquality-statistics",
                        "type": "BUTTON",
                        "parentId": 3569,
                        "path": "285-3569",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3574,
                "name": "偷油漏油预警",
                "code": "vehicle-premaintain-stealleakoil",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3576,
                        "name": "偷油漏油预警阈值保存",
                        "code": "vehicle-premaintain-stealleakoil-edit",
                        "type": "BUTTON",
                        "parentId": 3574,
                        "path": "285-3574",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3577,
                        "name": "偷油漏油表导出",
                        "code": "vehicle-premaintain-stealleakoil-export",
                        "type": "BUTTON",
                        "parentId": 3574,
                        "path": "285-3574",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3578,
                        "name": "偷油漏油列表",
                        "code": "vehicle-premaintain-stealleakoil-list",
                        "type": "BUTTON",
                        "parentId": 3574,
                        "path": "285-3574",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3579,
                        "name": "偷油漏油统计",
                        "code": "vehicle-premaintain-stealleakoil-statistics",
                        "type": "BUTTON",
                        "parentId": 3574,
                        "path": "285-3574",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3581,
                "name": "胎压预警",
                "code": "vehicle-premaintain-tirePressure",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3583,
                        "name": "胎压预警阈值保存",
                        "code": "vehicle-premaintain-tirePressure-edit",
                        "type": "BUTTON",
                        "parentId": 3581,
                        "path": "285-3581",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3584,
                        "name": "胎压表导出",
                        "code": "vehicle-premaintain-tirePressure-export",
                        "type": "BUTTON",
                        "parentId": 3581,
                        "path": "285-3581",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3585,
                        "name": "胎压列表",
                        "code": "vehicle-premaintain-tirePressure-list",
                        "type": "BUTTON",
                        "parentId": 3581,
                        "path": "285-3581",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3586,
                        "name": "胎压统计",
                        "code": "vehicle-premaintain-tirePressure-statistics",
                        "type": "BUTTON",
                        "parentId": 3581,
                        "path": "285-3581",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3588,
                "name": "DPF压差预警",
                "code": "vehicle-premaintain-dpfPressure",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3590,
                        "name": "DPF压差预警阈值保存",
                        "code": "vehicle-premaintain-dpfPressure-edit",
                        "type": "BUTTON",
                        "parentId": 3588,
                        "path": "285-3588",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3591,
                        "name": "DPF压差表导出",
                        "code": "vehicle-premaintain-dpfPressure-export",
                        "type": "BUTTON",
                        "parentId": 3588,
                        "path": "285-3588",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3592,
                        "name": "DPF压差列表",
                        "code": "vehicle-premaintain-dpfPressure-list",
                        "type": "BUTTON",
                        "parentId": 3588,
                        "path": "285-3588",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3593,
                        "name": "DPF压差统计",
                        "code": "vehicle-premaintain-dpfPressure-statistics",
                        "type": "BUTTON",
                        "parentId": 3588,
                        "path": "285-3588",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3595,
                "name": "灯具故障预警",
                "code": "vehicle-premaintain-lampfault",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3597,
                        "name": "灯具故障预警阈值保存",
                        "code": "vehicle-premaintain-lampfault-edit",
                        "type": "BUTTON",
                        "parentId": 3595,
                        "path": "285-3595",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3598,
                        "name": "灯具故障表导出",
                        "code": "vehicle-premaintain-lampfault-export",
                        "type": "BUTTON",
                        "parentId": 3595,
                        "path": "285-3595",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3599,
                        "name": "灯具故障列表",
                        "code": "vehicle-premaintain-lampfault-list",
                        "type": "BUTTON",
                        "parentId": 3595,
                        "path": "285-3595",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3600,
                        "name": "灯具故障统计",
                        "code": "vehicle-premaintain-lampfault-statistics",
                        "type": "BUTTON",
                        "parentId": 3595,
                        "path": "285-3595",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3602,
                "name": "scr健康度预警",
                "code": "vehicle-premaintain-scrhealth",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 3603,
                        "name": "scr健康度预警查询",
                        "code": "vehicle-premaintain-scrhealth-list",
                        "type": "BUTTON",
                        "parentId": 3602,
                        "path": "285-3602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3604,
                        "name": "scr健康度预警阈值保存",
                        "code": "vehicle-premaintain-scrhealth-edit",
                        "type": "BUTTON",
                        "parentId": 3602,
                        "path": "285-3602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3605,
                        "name": "scr健康度预警导出",
                        "code": "vehicle-premaintain-scrhealth-export",
                        "type": "BUTTON",
                        "parentId": 3602,
                        "path": "285-3602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3606,
                        "name": "scr健康度预警统计",
                        "code": "vehicle-premaintain-scrhealth-statistics",
                        "type": "BUTTON",
                        "parentId": 3602,
                        "path": "285-3602",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3607,
                "name": "总预警统计",
                "code": "vehicle-premaintain-statisticsAllWarning",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": null,
                "own": 0
            },
            {
                "id": 7000,
                "name": "车辆调度预约单",
                "code": "vehicle:schedule:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 7001,
                        "name": "供方单位列表",
                        "code": "vehicle:schedule:materialCompany:list",
                        "type": "BUTTON",
                        "parentId": 7000,
                        "path": "285-7000",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7002,
                        "name": "车辆调度数据列表",
                        "code": "vehicle:schedule:order:list",
                        "type": "BUTTON",
                        "parentId": 7000,
                        "path": "285-7000",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7003,
                        "name": "车辆调度数据列表导出",
                        "code": "vehicle:schedule:order:list:export",
                        "type": "BUTTON",
                        "parentId": 7000,
                        "path": "285-7000",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7004,
                        "name": "更新车辆调度预约单",
                        "code": "vehicle:schedule:order:update",
                        "type": "BUTTON",
                        "parentId": 7000,
                        "path": "285-7000",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 7010,
                "name": "泊位管理",
                "code": "vehicle:schedule:park:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 7011,
                        "name": "新增泊位",
                        "code": "vehicle:schedule:park:add",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7012,
                        "name": "泊位导入",
                        "code": "vehicle:schedule:park:import",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7013,
                        "name": "泊位导入模板",
                        "code": "vehicle:schedule:park:importTemplate",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7014,
                        "name": "泊位列表",
                        "code": "vehicle:schedule:park:list",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7015,
                        "name": "泊位列表导出",
                        "code": "vehicle:schedule:park:list:export",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7016,
                        "name": "编辑泊位",
                        "code": "vehicle:schedule:park:update",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7017,
                        "name": "物料列表",
                        "code": "vehicle:schedule:material:list",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7018,
                        "name": "绑定泊位",
                        "code": "vehicle:schedule:park:bind",
                        "type": "BUTTON",
                        "parentId": 7010,
                        "path": "285-7010",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 7020,
                "name": "供方管理",
                "code": "vehicle:schedule:company:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 7021,
                        "name": "供方导入模板",
                        "code": "vehicle:schedule:company:import:template",
                        "type": "BUTTON",
                        "parentId": 7020,
                        "path": "285-7020",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7022,
                        "name": "供方导入",
                        "code": "vehicle:schedule:company:import",
                        "type": "BUTTON",
                        "parentId": 7020,
                        "path": "285-7020",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7023,
                        "name": "供方删除",
                        "code": "vehicle:schedule:company:delete",
                        "type": "BUTTON",
                        "parentId": 7020,
                        "path": "285-7020",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 7024,
                        "name": "供方单位列表导出",
                        "code": "vehicle:schedule:materialCompany:list:export",
                        "type": "BUTTON",
                        "parentId": 7020,
                        "path": "285-7020",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 10081,
                "name": "试验车",
                "code": "vehicle-test",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": null,
                "own": 0
            },
            {
                "id": 300602,
                "name": "油耗监控",
                "code": "data-analysis:oilMonitor:menu",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 300603,
                        "name": "查看油耗地图数据",
                        "code": "oilMonitor:route-map",
                        "type": "BUTTON",
                        "parentId": 300602,
                        "path": "285-300602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300604,
                        "name": "查询车辆",
                        "code": "oilMonitor:truckList",
                        "type": "BUTTON",
                        "parentId": 300602,
                        "path": "285-300602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300605,
                        "name": "生产报告",
                        "code": "oilMonitor:getMaintainDateStartAnalysis",
                        "type": "BUTTON",
                        "parentId": 300602,
                        "path": "285-300602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300606,
                        "name": "查询报告",
                        "code": "oilMonitor:getReport",
                        "type": "BUTTON",
                        "parentId": 300602,
                        "path": "285-300602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300607,
                        "name": "用户反馈信息记录",
                        "code": "oilMonitor:saveFeedback",
                        "type": "BUTTON",
                        "parentId": 300602,
                        "path": "285-300602",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300608,
                        "name": "车辆品牌",
                        "code": "oilMonitor:getBrand",
                        "type": "BUTTON",
                        "parentId": 300602,
                        "path": "285-300602",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 300769,
                "name": "运力分析",
                "code": "capacity-analysis",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 300770,
                        "name": "按区域获取实时总体数据",
                        "code": "getAreaAllData",
                        "type": "BUTTON",
                        "parentId": 300769,
                        "path": "285-300769",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300771,
                        "name": "按区域获取热力图数据",
                        "code": "getDiagramData",
                        "type": "BUTTON",
                        "parentId": 300769,
                        "path": "285-300769",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300772,
                        "name": "按区域获取均值和变化趋势信息",
                        "code": "getAreaData",
                        "type": "BUTTON",
                        "parentId": 300769,
                        "path": "285-300769",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300773,
                        "name": "按区域获取下级区域开工率排名",
                        "code": "getAreaOperatingRate",
                        "type": "BUTTON",
                        "parentId": 300769,
                        "path": "285-300769",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300774,
                        "name": "按马力段开工率排名",
                        "code": "getHorsepowerOperatingRate",
                        "type": "BUTTON",
                        "parentId": 300769,
                        "path": "285-300769",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302394,
                        "name": "按区域获取指定排名类型的通用排名数据",
                        "code": "get-area-common-rank-info",
                        "type": "BUTTON",
                        "parentId": 300769,
                        "path": "285-300769",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 300794,
                "name": "运力分析(电动)",
                "code": "capacity-analysisElectric",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 300795,
                        "name": "按区域获取实时总体数据",
                        "code": "getAreaAllDatas",
                        "type": "BUTTON",
                        "parentId": 300794,
                        "path": "285-300794",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300796,
                        "name": "按区域获取热力图数据",
                        "code": "getDiagramDatas",
                        "type": "BUTTON",
                        "parentId": 300794,
                        "path": "285-300794",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300797,
                        "name": "按区域获取均值和变化趋势信息",
                        "code": "getAreaDatas",
                        "type": "BUTTON",
                        "parentId": 300794,
                        "path": "285-300794",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300798,
                        "name": "按区域获取下级区域开工率排名",
                        "code": "getAreaOperatingRates",
                        "type": "BUTTON",
                        "parentId": 300794,
                        "path": "285-300794",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 300799,
                        "name": "按马力段开工率排名",
                        "code": "getHorsepowerOperatingRates",
                        "type": "BUTTON",
                        "parentId": 300794,
                        "path": "285-300794",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302395,
                        "name": "按区域获取指定排名类型的通用排名数据",
                        "code": "get-area-common-rank-info-electric",
                        "type": "BUTTON",
                        "parentId": 300794,
                        "path": "285-300794",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 302381,
                "name": "营销分析",
                "code": "market-analysis",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 302383,
                        "name": "按区域获取关键数据",
                        "code": "get-critical-info",
                        "type": "BUTTON",
                        "parentId": 302381,
                        "path": "285-302381",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302384,
                        "name": "按区域获取热力图数据",
                        "code": "get-heat-map-info",
                        "type": "BUTTON",
                        "parentId": 302381,
                        "path": "285-302381",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302385,
                        "name": "按区域获取历史数据",
                        "code": "get-history-info",
                        "type": "BUTTON",
                        "parentId": 302381,
                        "path": "285-302381",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302386,
                        "name": "按区域获取变化趋势数据",
                        "code": "get-trend-info",
                        "type": "BUTTON",
                        "parentId": 302381,
                        "path": "285-302381",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302387,
                        "name": "按区域获取排名数据",
                        "code": "get-area-rank-info",
                        "type": "BUTTON",
                        "parentId": 302381,
                        "path": "285-302381",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 302382,
                "name": "营销分析(电动)",
                "code": "market-analysisElectric",
                "type": "MENU",
                "parentId": 285,
                "path": "285",
                "children": [
                    {
                        "id": 302388,
                        "name": "按区域获取关键数据",
                        "code": "electric:get-critical-info",
                        "type": "BUTTON",
                        "parentId": 302382,
                        "path": "285-302382",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302389,
                        "name": "按区域获取热力图数据",
                        "code": "electric:get-heat-map-info",
                        "type": "BUTTON",
                        "parentId": 302382,
                        "path": "285-302382",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302390,
                        "name": "按区域获取历史数据",
                        "code": "electric:get-history-info",
                        "type": "BUTTON",
                        "parentId": 302382,
                        "path": "285-302382",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302391,
                        "name": "按区域获取变化趋势数据",
                        "code": "electric:get-trend-info",
                        "type": "BUTTON",
                        "parentId": 302382,
                        "path": "285-302382",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 302392,
                        "name": "按区域获取排名数据",
                        "code": "electric:get-area-rank-info",
                        "type": "BUTTON",
                        "parentId": 302382,
                        "path": "285-302382",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 324,
        "name": "Tbox",
        "code": "tbox",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 325,
                "name": "TBOX管理",
                "code": "TBOX-manage",
                "type": "MENU",
                "parentId": 324,
                "path": "324",
                "children": [
                    {
                        "id": 326,
                        "name": "查询",
                        "code": "TBOX-manage-search",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 327,
                        "name": "新增",
                        "code": "TBOX-manage-add",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 328,
                        "name": "查看详情",
                        "code": "TBOX-manage-detail",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 329,
                        "name": "导入",
                        "code": "TBOX-manage-import",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 330,
                        "name": "导出",
                        "code": "TBOX-manage-export",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 331,
                        "name": "获取导入的数据模板",
                        "code": "TBOX-manage-getTemplate",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 332,
                        "name": "删除",
                        "code": "TBOX-manage-delete",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 345,
                        "name": "编辑",
                        "code": "TBOX-manage-edit",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 367,
                        "name": "TBOX设置",
                        "code": "TBOX-manage-set",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 368,
                        "name": "TBOX设置提交",
                        "code": "TBOX-set-submit",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 369,
                        "name": "TBOX设置重置",
                        "code": "TBOX-set-reset",
                        "type": "BUTTON",
                        "parentId": 325,
                        "path": "324-325",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 333,
                "name": "TBOX型号管理",
                "code": "TBOX-model",
                "type": "MENU",
                "parentId": 324,
                "path": "324",
                "children": [
                    {
                        "id": 334,
                        "name": "查询",
                        "code": "TBOX-model-search",
                        "type": "BUTTON",
                        "parentId": 333,
                        "path": "324-333",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 335,
                        "name": "新增",
                        "code": "TBOX-model-add",
                        "type": "BUTTON",
                        "parentId": 333,
                        "path": "324-333",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 336,
                        "name": "导出",
                        "code": "TBOX-model-export",
                        "type": "BUTTON",
                        "parentId": 333,
                        "path": "324-333",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 337,
                        "name": "详情",
                        "code": "TBOX-model-detail",
                        "type": "BUTTON",
                        "parentId": 333,
                        "path": "324-333",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 338,
                        "name": "编辑",
                        "code": "TBOX-model-edit",
                        "type": "BUTTON",
                        "parentId": 333,
                        "path": "324-333",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 339,
                        "name": "删除",
                        "code": "TBOX-model-delete",
                        "type": "BUTTON",
                        "parentId": 333,
                        "path": "324-333",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 340,
                        "name": "查询型号列表",
                        "code": "TBOX-model-search-model-type",
                        "type": "BUTTON",
                        "parentId": 333,
                        "path": "324-333",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 395,
        "name": "报表",
        "code": "forms",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 474,
                "name": "订单统计",
                "code": "order-statistics",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 478,
                        "name": "订单统计查询",
                        "code": "order-statistic-search",
                        "type": "BUTTON",
                        "parentId": 474,
                        "path": "395-474",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 479,
                        "name": "订单统计报表导出",
                        "code": "order-statistic-export",
                        "type": "BUTTON",
                        "parentId": 474,
                        "path": "395-474",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 794,
                        "name": "商品品类列表",
                        "code": "preorder-statistic-list-goods-type",
                        "type": "BUTTON",
                        "parentId": 474,
                        "path": "395-474",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 531,
                "name": "数据概览",
                "code": "data-overview",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 3014,
                        "name": "数据概览",
                        "code": "forms:data-overview:latest-data",
                        "type": "MENU",
                        "parentId": 531,
                        "path": "395-531",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 552,
                "name": "提醒执行率报表",
                "code": "remind-exec-report",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 553,
                        "name": "提醒执行率报表导出",
                        "code": "remind-exec-report-export",
                        "type": "BUTTON",
                        "parentId": 552,
                        "path": "395-552",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 1800,
                "name": "数据导出",
                "code": "mall:excel:resource:home",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 1801,
                        "name": "报表资源列表",
                        "code": "mall:excel:resource:list",
                        "type": "BUTTON",
                        "parentId": 1800,
                        "path": "395-1800",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 1802,
                        "name": "报表导出",
                        "code": "mall:excel:resource:export",
                        "type": "BUTTON",
                        "parentId": 1800,
                        "path": "395-1800",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3006,
                "name": "车辆里程油耗统计报表",
                "code": "vehicle-summary",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": null,
                "own": 0
            },
            {
                "id": 3008,
                "name": "车辆失联监控",
                "code": "iot:forms:truck-offline:home",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 3009,
                        "name": "查询",
                        "code": "iot:forms:truck-offline:list",
                        "type": "BUTTON",
                        "parentId": 3008,
                        "path": "395-3008",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3010,
                        "name": "导出",
                        "code": "iot:forms:truck-offline:export",
                        "type": "BUTTON",
                        "parentId": 3008,
                        "path": "395-3008",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3072,
                "name": "车况数据",
                "code": "forms:truck-history-data",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 3073,
                        "name": "历史车况数据",
                        "code": "forms:truck-history-data:truck-history-list",
                        "type": "BUTTON",
                        "parentId": 3072,
                        "path": "395-3072",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3074,
                        "name": "历史车况数据导出",
                        "code": "forms:truck-history-data:export",
                        "type": "BUTTON",
                        "parentId": 3072,
                        "path": "395-3072",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3075,
                "name": "远控使用报表",
                "code": "remote-exec-report",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": null,
                "own": 0
            },
            {
                "id": 3076,
                "name": "保养维护推送",
                "code": "maintenance-exec-report",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": null,
                "own": 0
            },
            {
                "id": 3077,
                "name": "远控操作记录",
                "code": "operation-exec-report",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": null,
                "own": 0
            },
            {
                "id": 3094,
                "name": "电子围栏",
                "code": "electronic-fence-trucks",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 3095,
                        "name": "电子围栏-车辆列表",
                        "code": "electronic-fence-trucks-list",
                        "type": "BUTTON",
                        "parentId": 3094,
                        "path": "395-3094",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3096,
                        "name": "电子围栏-车辆导出",
                        "code": "electronic-fence-trucks-list-export",
                        "type": "BUTTON",
                        "parentId": 3094,
                        "path": "395-3094",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3201,
                "name": "车辆运营看板",
                "code": "system:truck-drive",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 3203,
                        "name": "车流量更多",
                        "code": "system:truck-drive:truck-flow",
                        "type": "BUTTON",
                        "parentId": 3201,
                        "path": "395-3201",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3204,
                        "name": "开工率更多",
                        "code": "system:truck-drive:working-rate:detail",
                        "type": "BUTTON",
                        "parentId": 3201,
                        "path": "395-3201",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3202,
                "name": "车辆运营看板设置",
                "code": "system:truck-drive:layout_save",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": null,
                "own": 0
            },
            {
                "id": 3214,
                "name": "试验车油耗统计",
                "code": "forms:trial-truck-oiling-report",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 3215,
                        "name": "试验车油耗统计-列表",
                        "code": "forms:trial-truck-oiling-report:list",
                        "type": "BUTTON",
                        "parentId": 3214,
                        "path": "395-3214",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3216,
                        "name": "试验车油耗统计-导出",
                        "code": "forms:trial-truck-oiling-report:export",
                        "type": "BUTTON",
                        "parentId": 3214,
                        "path": "395-3214",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3391,
                "name": "车辆里程油耗明细报表",
                "code": "report:mileage-fuel:detail:list",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": null,
                "own": 0
            },
            {
                "id": 3562,
                "name": "里程油耗预警",
                "code": "fuel-consumption-warning",
                "type": "MENU",
                "parentId": 395,
                "path": "395",
                "children": [
                    {
                        "id": 3563,
                        "name": "查询里程油耗预警列表信息",
                        "code": "fuel-consumption-warning-list",
                        "type": "BUTTON",
                        "parentId": 3562,
                        "path": "395-3562",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3564,
                        "name": "获取所有发动机品牌",
                        "code": "fuel-consumption-warning-engine-brand-list",
                        "type": "VIEW",
                        "parentId": 3562,
                        "path": "395-3562",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3565,
                        "name": "油耗异常行程轨迹",
                        "code": "fuel-consumption-warning-trip-truck",
                        "type": "BUTTON",
                        "parentId": 3562,
                        "path": "395-3562",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 411,
        "name": "金融",
        "code": "finance",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 3101,
                "name": "金融锁车",
                "code": "financial:financial-lock:menu",
                "type": "MENU",
                "parentId": 411,
                "path": "411",
                "children": [
                    {
                        "id": 3102,
                        "name": "金融锁车列表",
                        "code": "financial:financial-lock:list",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3103,
                        "name": "车辆上线提醒",
                        "code": "financial:financial-lock:truck:online-remind",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3104,
                        "name": "控车",
                        "code": "financial:financial-lock:execute",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3105,
                        "name": "记录",
                        "code": "financial:financial-lock:commands",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3109,
                        "name": "金融锁车列表导出",
                        "code": "financial:financial-lock:list:export",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3111,
                        "name": "车辆电子围栏新增",
                        "code": "financial:truck-elec-fence:add",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3112,
                        "name": "车辆电子围栏修改",
                        "code": "financial:truck-elec-fence:modify",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3113,
                        "name": "车辆电子围栏详情",
                        "code": "financial:truck-elec-fence:detail",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3521,
                        "name": "金融锁车-授权合同审核",
                        "code": "financial:financial-lock:contract-audit",
                        "type": "BUTTON",
                        "parentId": 3101,
                        "path": "411-3101",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3106,
                "name": "短信指令",
                "code": "financial:message:menu",
                "type": "MENU",
                "parentId": 411,
                "path": "411",
                "children": [
                    {
                        "id": 3107,
                        "name": "设置",
                        "code": "financial:message:command",
                        "type": "BUTTON",
                        "parentId": 3106,
                        "path": "411-3106",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3108,
                        "name": "获取解锁口令",
                        "code": "financial:message:password",
                        "type": "BUTTON",
                        "parentId": 3106,
                        "path": "411-3106",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3110,
                "name": "业务监控",
                "code": "financial:monitor:menu",
                "type": "MENU",
                "parentId": 411,
                "path": "411",
                "children": [
                    {
                        "id": 3114,
                        "name": "车辆短信预警",
                        "code": "financial:monitor:business-monitor-remind",
                        "type": "BUTTON",
                        "parentId": 3110,
                        "path": "411-3110",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3141,
                "name": "第三方管理",
                "code": "financial:third-part-company:menu",
                "type": "MENU",
                "parentId": 411,
                "path": "411",
                "children": [
                    {
                        "id": 3142,
                        "name": "第三方公司列表",
                        "code": "financial:third-part-company:list",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3143,
                        "name": "第三方公司新增",
                        "code": "financial:third-part-company:add",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3144,
                        "name": "第三方公司修改",
                        "code": "financial:third-part-company:modify",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3145,
                        "name": "第三方公司详情",
                        "code": "financial:third-part-company:detail",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3151,
                        "name": "第三方公司车辆管理",
                        "code": "financial:third-part-company-truck:list",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3152,
                        "name": "第三方公司车辆新增",
                        "code": "financial:third-part-company-truck:add",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3153,
                        "name": "第三方公司车辆修改",
                        "code": "financial:third-part-company-truck:modify",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3154,
                        "name": "第三方公司车辆删除",
                        "code": "financial:third-part-company-truck:delete",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3155,
                        "name": "第三方公司车辆审核",
                        "code": "financial:third-part-company-truck:audit",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3156,
                        "name": "第三方公司车辆导入模板下载",
                        "code": "financial:third-part-company-truck:template-download",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3157,
                        "name": "第三方公司车辆批量导入",
                        "code": "financial:third-part-company-truck:import",
                        "type": "BUTTON",
                        "parentId": 3141,
                        "path": "411-3141",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3512,
                "name": "锁车订单",
                "code": "financial:financial-order-form:menu",
                "type": "MENU",
                "parentId": 411,
                "path": "411",
                "children": [
                    {
                        "id": 3513,
                        "name": "代理商订单",
                        "code": "financial:financial-order-form:dms-order",
                        "type": "BUTTON",
                        "parentId": 3512,
                        "path": "411-3512",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3515,
                        "name": "开票信息查询",
                        "code": "iot:invoice-info-manage",
                        "type": "BUTTON",
                        "parentId": 3512,
                        "path": "411-3512",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3516,
                        "name": "锁车订单开票",
                        "code": "financial:financial-order-form:confirm-order",
                        "type": "BUTTON",
                        "parentId": 3512,
                        "path": "411-3512",
                        "children": null,
                        "own": 0
                    },
                    {
                        "id": 3532,
                        "name": "金融锁车-上传网售金融分期订单",
                        "code": "financial:financial-order-form:import-data",
                        "type": "BUTTON",
                        "parentId": 3512,
                        "path": "411-3512",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            },
            {
                "id": 3518,
                "name": "确认收款",
                "code": "financial:financial-order-confirm:menu",
                "type": "MENU",
                "parentId": 411,
                "path": "411",
                "children": [
                    {
                        "id": 3517,
                        "name": "锁车订单确认收款",
                        "code": "financial:financial-order-confirm:confirm-order",
                        "type": "BUTTON",
                        "parentId": 3518,
                        "path": "411-3518",
                        "children": null,
                        "own": 0
                    }
                ],
                "own": 0
            }
        ],
        "own": 0
    },
    {
        "id": 35001,
        "name": "新品质量指标",
        "code": "newproduct-quality-form",
        "type": "MENU",
        "parentId": null,
        "path": null,
        "children": [
            {
                "id": 35003,
                "name": "车型下拉列表",
                "code": "newproduct-quality-allmodel",
                "type": "BUTTON",
                "parentId": 35001,
                "path": "35001",
                "children": null,
                "own": 0
            },
            {
                "id": 35004,
                "name": "主机编码下拉列表",
                "code": "newproduct-quality-machinecode",
                "type": "BUTTON",
                "parentId": 35001,
                "path": "35001",
                "children": null,
                "own": 0
            },
            {
                "id": 35005,
                "name": "新品质量指标图表",
                "code": "newproduct-quality-chart",
                "type": "BUTTON",
                "parentId": 35001,
                "path": "35001",
                "children": null,
                "own": 0
            },
            {
                "id": 35006,
                "name": "Top故障零部件列表",
                "code": "newproduct-quality-top",
                "type": "BUTTON",
                "parentId": 35001,
                "path": "35001",
                "children": null,
                "own": 0
            },
            {
                "id": 35007,
                "name": "服务订单详情",
                "code": "newproduct-quality-serverorder",
                "type": "BUTTON",
                "parentId": 35001,
                "path": "35001",
                "children": null,
                "own": 0
            },
            {
                "id": 35008,
                "name": "服务订单导出",
                "code": "newproduct-quality-export",
                "type": "BUTTON",
                "parentId": 35001,
                "path": "35001",
                "children": null,
                "own": 0
            }
        ],
        "own": 0
    }
]