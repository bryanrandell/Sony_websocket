*!
 * @file Const.js
 * @brief 定数定義
 */

'use strict';

/*!
 * @brief 名前空間
 */
var Const = {};

/*!
 * @brief INH用
 */
Const.DISABLE = 0;
Const.ENABLE = 1;

/*!
 * @brief 点滅処理用
 */
Const.BLINK_STOP = 0;
Const.BLINK_1HZ = 1;
Const.BLINK_4HZ = 4;
Const.BLINK_BASE_TIMER = 125;

/*!
 * @brief 色
 */
Const.COLOR_WHITE = '#EEEEEE';
Const.COLOR_BLACK = '#000000';
Const.COLOR_ORANGE = '#FFAA00';
Const.COLOR_LIGHT_GRAY = '#888888';
Const.COLOR_GRAY = '#222222';
Const.COLOR_GRAY2 = '#AAAAAA';  // RGB(170,170,170)
Const.COLOR_INFO_LINE_SETUP_HYPHEN = '#999999';
Const.COLOR_FULLMENU_MENU_LIST_INDEX_ODD  = '#262626';
Const.COLOR_FULLMENU_MENU_LIST_INDEX_EVEN = '#1C1C1C';
Const.COLOR_STD           = '#E6E6E6'; // RGB(230,230,230)
Const.COLOR_ACT           = '#FFAA00'; // RGB(255,170,0)
Const.COLOR_WK            = '#999999'; // RGB(153,153,153)
Const.COLOR_DRK           = '#333333'; // RGB(51,51,51)
Const.COLOR_RVS           = '#000000'; // RGB(0,0,0)
Const.COLOR_FULLMENU_BG                   = '#262626'; // RGB(38,38,38)
Const.COLOR_FULLMENU_STD_GRAYOUT          = '#888888'; // RGB(136,136,136)
Const.COLOR_FULLMENU_ACT_VAL              = '#FAAA00'; // RGB(250,170,0)
Const.COLOR_FULLMENU_ACT_VAL_DARK_ORANGE  = '#6A4400'; // RGB(106,68,0)
Const.COLOR_FULLMENU_ACT_VAL_LIGHT_ORANGE = '#885500'; // RGB(136,85,0)
Const.COLOR_DISABLED_CURSOR = '#996611';    // RGB(153,102,17) グレーアウト項目にあたっているカーソルの色
Const.COLOR_DISABLED_TEXT   = '#664400';    // RGB(102, 68, 0) カーソルが当たっているグレーアウト項目のテキストの色


/*!
 * @brief 不透明度
 */
Const.OPACITY_NORMAL   = 1.0; //!< 通常時
Const.OPACITY_GRAY_OUT = 0.5; //!< グレーアウト時

/*!
 * @brief 記号文字
 */
Const.CHAR_PLUS = '&#x002B;'; //!< プラス記号
Const.CHAR_MINUS = '&#x2212;'; //!< マイナス記号
Const.CHAR_SQUARE = '&#x25FB;'; //!< White Square

/*!
 * @brief Savona Property.GetValue の MapKey指定
 *                                        params                   , result
 *  [Format]:                             [{"key":MapKey}]         , {"key":(単一data or 複数data)}
 *  [Sample]:
 *    case1(単一data: 全指定)           : [{"key":["*"]}]          , {"key":999}
 *    case2(複数data: 全指定)           : [{"key":["*"]}]          , {"key":{"aaa":XXX, "bbb":YYY, "ccc":ZZZ}}
 *    case3(複数data: 複数指定)         : [{"key":["aaa", "bbb"]}] , {"key":{"aaa":XXX, "bbb":YYY}}
 *    case4(複数data: 単一指定)         : [{"key":["bbb"]}]        , {"key":{"bbb":YYY}}
 *    ※ case1において、resultがMapKey形式でない場合も"*"指定する(推奨ポリシー)
 */
Const.SAVONA_GET_VALUE_ALL = ["*"];	// 全指定.

/*!
 * @brief Assign関連
 */
Const.ASSIGN_FUNC = 0;
Const.ASSIGN_ONOFF = 1;
Const.ASSIGN_FUNC_LIST = 2;
Const.ASSIGN_WEBAPP_PARAM = 0;
Const.ASSIGN_SAVONA_PARAM = 1;

/*!
 * @brief capability関連
 */
Const.CAPABILITY_VALUE_INDEX = 2;

/*!
 * @brief ND関連
 */
Const.ND_VALUE = { 1:'Clear', 2:'0.3', 4:'0.6', 8:'0.9', 16:'1.2', 32:'1.5', 64:'1.8', 128:'2.1', 256:'2.4' };

/*!
 * @brief Sensitivity関連
 */
Const.BASE_ISO500       = 500;
Const.BASE_ISO2500      = 2500;
Const.EI_INVAlLID_INDEX = -1;
Const.STRID_PFX_ID712800_EI                 = 'EI';
Const.STRID_PFX_ID_1108300_STOPS            = 'Stops';
Const.STRID_PFX_ID1141400_BASE_ISO          = 'Base ISO:';
Const.STRID_PFX_ID1141500_CHANGE_BASE_ISO   = 'Change Base ISO?';
Const.STRID_PFX_ID1141600_ISO2500_TO_ISO500 = 'ISO 2500 → ISO 500';
Const.STRID_PFX_ID1141700_ISO500_TO_ISO2500 = 'ISO 500 → ISO 2500';
Const.GAIN_VALUE_LIST = ['-6dB', '-3dB', '0dB', '3dB', '6dB', '9dB', '12dB', '15dB', '18dB'];

/*!
 * @brief SS関連
 */
Const.SS_UNNECESSARY_CHAR = ".00";
Const.SS_DECIMAL_CHAR     = ".";
Const.SS_ZERO_CHAR        = "0";
Const.SS_DEFAULTINDEX      = -1;
Const.SS_ROUND_OFF_RANGE1 = 100.0;
Const.SS_ROUND_OFF_RANGE2 = 200.0;
Const.SS_SPEED_VAL_NO_CONVERT_LIST = [ 24.0, 25.0, 30.0, 48.0, 50.0, 60.0, 100.0, 120.0 ];
/*!
 * @brief WB関連
 */
Const.WB_TEMP = 0;
Const.WB_TINT = 1;
Const.WB_TYPE = 2;
Const.WB_LISTCHANGE_TYPE = 2;
Const.WB_COARSE = 0;
Const.WB_FINE = 1;
Const.WB_NG = 10;
Const.WB_INIT  = -100;
Const.WB_DEFAULTINDEX  = -1;
Const.WB_VAL_TYPE_INIT    = 1;
Const.WB_VAL_TYPE_CURRENT = 2;
Const.WB_MAX_VALUE = [ /*Temp*/15000, /*Tint*/ 99 ];
Const.WB_MIN_VALUE = [ /*Temp*/ 2000, /*Tint*/-99 ];
Const.WB_SETTING_STEP = [ /*Temp*/[ /*Coarse*/100, /*Fine*/1 ], /*Tint*/[ /*Coarse*/10, /*Fine*/1 ] ];
Const.WB_PRESET = [ [3200, 0], [4300, 0], [5500, 0] ];
Const.WB_TYPE_PRESET = 0;
Const.WB_TYPE_USER = 1;
Const.WB_TYPE_OTHER = 2;
Const.WB_LIST_MAX = 16;
Const.AWB_MSG = 'Auto White Balance';
Const.CANNOT_PROCEED_MSG = 'Cannot Proceed';
Const.ADD_TO_STEP_MSG = 'Add to Step?';
Const.SPECIAL_CHAR_PLUS  = '&#x002B;';
Const.SPECIAL_CHAR_MINUS = '&#x2212;';
Const.WB_5DIGITS = 10000;
Const.WB_CURRENT_VALUE_INDEX = 0;

/* AWB 実行元情報 */
Const.VCT_AWB_SOURCE_NONE        = 0;
Const.VCT_AWB_SOURCE_MENU        = 1; /* FullMenu     */
Const.VCT_AWB_SOURCE_BIG6        = 2; /* Big6         */
Const.VCT_AWB_SOURCE_ASSIGNABLE  = 3; /* Assignable   */

/* @brief WBメッセージ */

/* 行番号 */
Const.ERRID_ROW_NUM        = 0;
Const.EDIT_ENABLE_ROW_NUM  = 1;
Const.RESULT_ROW_NUM       = 2;
Const.ERRMSG1_ROW_NUM      = 3;
Const.ERRMSG2_ROW_NUM      = 4;


/* WBメッセージID(指示待ち) */
Const.MESSAGE_ID_WB_DELETE              = 0;
Const.MESSAGE_ID_AWB_ADD_EXECUTE_CANCEL = 1;
Const.MESSAGE_ID_AWB_NG                 = 2;
Const.MESSAGE_ID_AWB_EXECUTE_CANCEL     = 3;

Const.MESSAGE_NAME_LIST = [
'MESSAGE_WB_DELETE','MESSAGE_AWB_ADD_EXECUTE_CANCEL','MESSAGE_AWB_NG','MESSAGE_AWB_EXECUTE_CANCEL'
];

/* 出力メッセージ情報 */
Const.WB_APPEARED_MESSAGE_AWB = 0;  /* AWB関連のメッセージ */
Const.WB_APPEARED_MESSAGE_WB  = 1;  /* WB DELETEの確認メッセージ */
Const.WB_APPEARED_MESSAGE_MAX = 2;

/* エラーID */
Const.ERROR_ID_CANCEL_16MEMORIES          = '-5';  /* CANCEL(16Memories)  出力用        */
Const.ERROR_ID_COLORBARS                  = '-4';  /* Cannot Proceed(COLORBARS)  出力用 */
Const.ERROR_ID_PLAYINGBACK                = '-3';  /* Cannot Proceed(PLAYINGBACK)出力用 */
Const.ERROR_ID_AWB_RESULT_NG              = '-2';  /* AWB実行結果NG出力用               */
Const.ERROR_ID_AWB_RESULT_DEFAULT_NG      = '-1';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_AWB_RESULT_OK              =  '0';  /* AWB実行結果OK出力用               */
Const.ERROR_ID_HIGH_LIGHT                 =  '1';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_LOW_LIGHT                  =  '2';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_OUT_OF_RANGE               =  '3';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_CANCEL                     =  '4';  /* CANCEL  出力用                    */
Const.ERROR_ID_AWB_RESULT_NG_5            =  '5';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_TIMEOUT                    =  '6';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_AWB_RESULT_NG_7            =  '7';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_COLOR_TEMP_HIGH            =  '8';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_COLOR_TEMP_LOW             =  '9';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_AWB_RESULT_NG_10           = '10';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_AWB_RESULT_NG_11           = '11';  /* AWB実行結果NG(初期値)出力用       */
Const.ERROR_ID_TINT_OUT_OF_RANGE1         = '12';  /* TINT_OUTOF_RANGE出力用            */
Const.ERROR_ID_TINT_OUT_OF_RANGE2         = '13';  /* TINT_OUTOF_RANGE出力用            */
Const.ERROR_ID_COLOR_TEMP_HIGH1           = '14';  /* COLOR_TEMP_HIGH 出力用            */
Const.ERROR_ID_COLOR_TEMP_HIGH2           = '15';  /* COLOR_TEMP_HIGH 出力用            */
Const.ERROR_ID_COLOR_TEMP_LOW1            = '16';  /* COLOR_TEMP_LOW 出力用             */
Const.ERROR_ID_COLOR_TEMP_LOW2            = '17';  /* COLOR_TEMP_LOW 出力用             */
Const.ERROR_ID_EXECUTE_WAIT_DISP_REQUEST  = '100'; /* 実行指示待ちメッセージ出力用      */
Const.ERROR_ID_EXECUTING_DISP_REQUEST     = '101'; /* 実行中メッセージ出力用            */
Const.ERROR_ID_EXECUTE_WAIT_ERASE_REQUEST = '200'; /* 実行指示待ちメッセージ消去用      */
Const.ERROR_ID_EXECUTING_ERASE_REQUEST    = '201'; /* 実行中メッセージ消去用            */

Const.AWB_ERR_LIST = [
['-5',	false,	'Canceled',	'Already Exist',		'16 Memories'	],
['-4',	false,	'NG',		'Color Bars',			''				],
['-3',	false,	'NG',		'Playing back',			''				],
['-2',	false,	'NG',		'',						''				],	/* これ以前は実行拒否 */
['-1',	false,	'NG',		'',						''				],	/* 初期値 */
['0',	true,	'OK',		'',						''				],	/* Add 対象 */ /* 正常 */
['1',	false,	'NG',		'High Light',			''				],
['2',	false,	'NG',		'Low Light',			''				],
['3',	false,	'NG',		'Out of Range',			''				],
['4',	false,	'Canceled',	'',						''				],
['5',	false,	'NG',		'',						''				],	/* VENICE非対象 */
['6',	false,	'NG',		'Timeout',				''				],
['7',	false,	'NG',		'',						''				],	/* VENICE非対象 */
['8',	true,	'NG',		'Color Temp. High',		''				],	/* Add 対象 */
['9',	true,	'NG',		'Color Temp. Low',		''				],	/* Add 対象 */
['10',	false,	'NG',		'',						''				],	/* VENICE非対象 */
['11',	false,	'NG',		'',						''				],	/* VENICE非対象 */
['12',	true,	'NG',		'Tint. Out of Range',	''				],	/* Add 対象 */
['13',	true,	'NG',		'Tint. Out of Range',	''				],	/* Add 対象 */
['14',	true,	'NG',		'Color Temp. High',		''				],	/* Add 対象 */
['15',	true,	'NG',		'Color Temp. High',		''				],	/* Add 対象 */
['16',	true,	'NG',		'Color Temp. Low',		''				],	/* Add 対象 */
['17',	true,	'NG',		'Color Temp. Low',		''				],	/* Add 対象 */
['100',	false,	'',			'',						''				],	/* 実行指示待ちメッセージ出力用 */
['101',	false,	'',			'',						''				],	/* 実行中メッセージ出力用 */
['200',	false,	'',			'',						''				],	/* 実行指示待ちメッセージ消去用 */
['201',	false,	'',			'',						''				]	/* 実行中メッセージ消去用 */
];

Const.ERROR_INDEX_AWB_RESULT_OK =5;

/*!
 * @brief メディア状態表示関連
 */
Const.MEDIA_NOT_FULL = 0;
Const.MEDIA_NEAR_FULL = 1;
Const.MEDIA_FULL = 2;
Const.MEDIA_SLOT_SXS_A = 0;
Const.MEDIA_SLOT_SXS_B = 1;
Const.MEDIA_SLOT_AXS_A = 2;
Const.MEDIA_SLOT_AXS_B = 3;
Const.SEC_TO_MIN = 60;
Const.AUTO_SLOT_CHANGE_WARNING_THRESHOLD = Const.SEC_TO_MIN;
Const.MEDIA_REMAIN_MAX = 999;

/*!
 * @brief 画サイズ表示関連
 * @param Const.IMAGER_*** = [HEIGTH, WIDTH, DISPLAY_FORMAT];
 */

/* アイコンファイル定義 */
Const.IMAGER_MODE_ICON_NON = '';
Const.IMAGER_MODE_ICON_4K17_9_1_25X_SV = 'venice_outside_home_text_120x18_4k179125xsv_web.png';
Const.IMAGER_MODE_ICON_4K17_9_1_65X_SV = 'venice_outside_home_text_120x18_4k179165xsv_web.png';

Const.IMAGER_GET_WIDTH              = 0;
Const.IMAGER_GET_HEIGHT             = 1;
Const.IMAGER_GET_DE_SQUEEZE_RATIO   = 2;
Const.IMAGER_GET_ASPECT_WIDTH       = 3;
Const.IMAGER_GET_ASPECT_HEIGHT      = 4;
Const.IMAGER_GET_SURROUNDE_VIEW     = 5;
Const.IMAGER_SET_DISP_VALUE         = 6;
Const.IMAGER_SET_DISP_IMAGE         = 7;
Const.IMAGER_SET_PLAY_DISP_VALUE    = 8;
/* Width, Height, AspectRatio.AnamorphicScale.Value, AspectRatio.Width, AspectRatio.Height, SurroundView, DisplayString */
/* 6K 3:2 group */
Const.IMAGER_MODE_DISP_6K_3_2           = [ 6048, 4032, 'None',          '3',    '2', false, '6K 3:2'         , Const.IMAGER_MODE_ICON_NON,             '6K 3:2'         ];
Const.IMAGER_MODE_DISP_6K_3_2_1_25x     = [ 6048, 4032, '1.25x',         '3',    '2', false, '6K 3:2 1.25x'   , Const.IMAGER_MODE_ICON_NON,             '6K 3:2 1.25x'   ];
Const.IMAGER_MODE_DISP_6K_3_2_1_3x      = [ 6048, 4032, '1.3x',          '3',    '2', false, '6K 3:2 1.3x'    , Const.IMAGER_MODE_ICON_NON,             '6K 3:2 1.3x'    ];
Const.IMAGER_MODE_DISP_6K_3_2_1_5x      = [ 6048, 4032, '1.5x',          '3',    '2', false, '6K 3:2 1.5x'    , Const.IMAGER_MODE_ICON_NON,             '6K 3:2 1.5x'    ];
Const.IMAGER_MODE_DISP_6K_3_2_1_65x     = [ 6048, 4032, '1.65x',         '3',    '2', false, '6K 3:2 1.65x'   , Const.IMAGER_MODE_ICON_NON,             '6K 3:2 1.65x'   ];
Const.IMAGER_MODE_DISP_6K_3_2_1_8x      = [ 6048, 4032, '1.8x',          '3',    '2', false, '6K 3:2 1.8x'    , Const.IMAGER_MODE_ICON_NON,             '6K 3:2 1.8x'    ];
Const.IMAGER_MODE_DISP_6K_3_2_2x        = [ 6048, 4032, '2x',            '3',    '2', false, '6K 3:2 2.0x'    , Const.IMAGER_MODE_ICON_NON,             '6K 3:2 2.0x'    ];
/* 6K 1.85:1 */
Const.IMAGER_MODE_DISP_6K_185_1         = [ 6048, 3270, 'None',          '1.85', '1', false, '6K 1.85:1'      , Const.IMAGER_MODE_ICON_NON,             '6K 1.85:1'      ];
/* 6K 17:9 group */
Const.IMAGER_MODE_DISP_6K_17_9          = [ 6048, 3190, 'None',          '17',   '9', false, '6K 17:9'        , Const.IMAGER_MODE_ICON_NON,             '6K 17:9'        ];
Const.IMAGER_MODE_DISP_6K_17_9_1_25x    = [ 6048, 3190, '1.25x',         '17',   '9', false, '6K 17:9 1.25x'  , Const.IMAGER_MODE_ICON_NON,             '6K 17:9 1.25x'  ];
Const.IMAGER_MODE_DISP_6K_17_9_1_3x     = [ 6048, 3190, '1.3x',          '17',   '9', false, '6K 17:9 1.3x'   , Const.IMAGER_MODE_ICON_NON,             '6K 17:9 1.3x'   ];
Const.IMAGER_MODE_DISP_6K_17_9_1_65x    = [ 6048, 3190, '1.65x',         '17',   '9', false, '6K 17:9 1.65x'  , Const.IMAGER_MODE_ICON_NON,             '6K 17:9 1.65x'  ];
Const.IMAGER_MODE_DISP_6K_17_9_1_8x     = [ 6048, 3190, '1.8x',          '17',   '9', false, '6K 17:9 1.8x'   , Const.IMAGER_MODE_ICON_NON,             '6K 17:9 1.8x'   ];
Const.IMAGER_MODE_DISP_6K_17_9_2x       = [ 6048, 3190, '2x',            '17',   '9', false, '6K 17:9 2.0x'   , Const.IMAGER_MODE_ICON_NON,             '6K 17:9 2.0x'   ];
/* 6K 2.39:1 and 5.7K 16:9 */
Const.IMAGER_MODE_DISP_6K_239_1         = [ 6048, 2530, 'None',          '2.39', '1', false, '6K 2.39:1'      , Const.IMAGER_MODE_ICON_NON,             '6K 2.39:1'      ];
Const.IMAGER_MODE_DISP_57K_16_9         = [ 5672, 3190, 'None',          '16',   '9', false, '5.7K 16:9'      , Const.IMAGER_MODE_ICON_NON,             '5.7K 16:9'      ];
/*4K 6:5 group */
Const.IMAGER_MODE_DISP_4K_6_5           = [ 4096, 3428, 'None',          '6',    '5', false, '4K 6:5'         , Const.IMAGER_MODE_ICON_NON,             '4K 6:5'         ];
Const.IMAGER_MODE_DISP_4K_6_5_2x        = [ 4096, 3428, '2x',            '6',    '5', false, '4K 6:5 2.0x'    , Const.IMAGER_MODE_ICON_NON,             '4K 6:5 2.0x'    ];
/* 4K 4:3 group */
Const.IMAGER_MODE_DISP_4K_4_3           = [ 4096, 3072, 'None',          '4',    '3', false, '4K 4:3'         , Const.IMAGER_MODE_ICON_NON,             '4K 4:3'         ];
Const.IMAGER_MODE_DISP_4K_4_3_1_3x      = [ 4096, 3072, '1.3x',          '4',    '3', false, '4K 4:3 1.3x'    , Const.IMAGER_MODE_ICON_NON,             '4K 4:3 1.3x'    ];
Const.IMAGER_MODE_DISP_4K_4_3_1_65x     = [ 4096, 3072, '1.65x',         '4',    '3', false, '4K 4:3 1.65x'   , Const.IMAGER_MODE_ICON_NON,             '4K 4:3 1.65x'    ];
Const.IMAGER_MODE_DISP_4K_4_3_1_8x      = [ 4096, 3072, '1.8x',          '4',    '3', false, '4K 4:3 1.8x'    , Const.IMAGER_MODE_ICON_NON,             '4K 4:3 1.8x'    ];
Const.IMAGER_MODE_DISP_4K_4_3_2x        = [ 4096, 3072, '2x',            '4',    '3', false, '4K 4:3 2.0x'    , Const.IMAGER_MODE_ICON_NON,             '4K 4:3 2.0x'    ];
Const.IMAGER_MODE_DISP_4K_4_3_SV        = [ 4096, 3072, 'None',          '4',    '3', true,  '4K 4:3 SV'      , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_4_3_1_3x_SV   = [ 4096, 3072, '1.3x',          '4',    '3', true,  '4K 4:3 1.3x SV' , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_4_3_1_65x_SV  = [ 4096, 3072, '1.65x',         '4',    '3', true,  '4K4:3 1.65xSV'  , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_4_3_1_8x_SV   = [ 4096, 3072, '1.8x',          '4',    '3', true,  '4K 4:3 1.8x SV' , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_4_3_2x_SV     = [ 4096, 3072, '2x',            '4',    '3', true,  '4K 4:3 2.0x SV' , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
/* 4K 17:9 group */
Const.IMAGER_MODE_DISP_4K_17_9          = [ 4096, 2160, 'None',          '17',   '9', false, '4K 17:9'        , Const.IMAGER_MODE_ICON_NON,             '4K 17:9'        ];
Const.IMAGER_MODE_DISP_4K_17_9_1_25x    = [ 4096, 2160, '1.25x',         '17',   '9', false, '4K 17:9 1.25x'  , Const.IMAGER_MODE_ICON_NON,             '4K 17:9 1.25x'  ];
Const.IMAGER_MODE_DISP_4K_17_9_1_3x     = [ 4096, 2160, '1.3x',          '17',   '9', false, '4K 17:9 1.3x'   , Const.IMAGER_MODE_ICON_NON,             '4K 17:9 1.3x'   ];
Const.IMAGER_MODE_DISP_4K_17_9_1_65x    = [ 4096, 2160, '1.65x',         '17',   '9', false, '4K 17:9 1.65x'  , Const.IMAGER_MODE_ICON_NON,             '4K 17:9 1.65x'  ];
Const.IMAGER_MODE_DISP_4K_17_9_1_8x     = [ 4096, 2160, '1.8x',          '17',   '9', false, '4K 17:9 1.8x'   , Const.IMAGER_MODE_ICON_NON,             '4K 17:9 1.8x'   ];
Const.IMAGER_MODE_DISP_4K_17_9_2x       = [ 4096, 2160, '2x',            '17',   '9', false, '4K 17:9 2.0x'   , Const.IMAGER_MODE_ICON_NON,             '4K 17:9 2.0x'   ];
Const.IMAGER_MODE_DISP_4K_17_9_SV       = [ 4096, 2160, 'None',          '17',   '9', true,  '4K 17:9 SV'     , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_17_9_1_25x_SV = [ 4096, 2160, '1.25x',         '17',   '9', true,  ''               , Const.IMAGER_MODE_ICON_4K17_9_1_25X_SV, '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_17_9_1_3x_SV  = [ 4096, 2160, '1.3x',          '17',   '9', true,  '4K17:9 1.3xSV'  , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_17_9_1_65x_SV = [ 4096, 2160, '1.65x',         '17',   '9', true,  ''               , Const.IMAGER_MODE_ICON_4K17_9_1_65X_SV, '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_17_9_1_8x_SV  = [ 4096, 2160, '1.8x',          '17',   '9', true,  '4K17:9 1.8xSV'  , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
Const.IMAGER_MODE_DISP_4K_17_9_2x_SV    = [ 4096, 2160, '2x',            '17',   '9', true,  '4K17:9 2.0xSV'  , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];
/* 4K 2.39:1 group */
Const.IMAGER_MODE_DISP_4K_239_1         = [ 4096, 1716, 'None',          '2.39', '1', false, '4K 2.39:1'      , Const.IMAGER_MODE_ICON_NON,             '4K 2.39:1'      ];
/* 3.8K 16:9 group */
Const.IMAGER_MODE_DISP_38K_16_9         = [ 3840, 2160, 'None',          '16',   '9', false, '3.8K 16:9'      , Const.IMAGER_MODE_ICON_NON,             '3.8K 16:9'      ];
Const.IMAGER_MODE_DISP_38K_16_9_SV      = [ 3840, 2160, 'None',          '16',   '9', true,  '3.8K 16:9 SV'   , Const.IMAGER_MODE_ICON_NON,             '' /*None*/      ];


/*!
 * @brief RecFormatサイズ表示関連
 * @param Const.RECFORMAT_*** = [HEIGTH, WIDTH, CODEC, SCAN_TYPE, BITRATE, CHROMA, DISPLAY_FORMAT];
 */
Const.RECFORMAT_WIDTH           = 0;
Const.RECFORMAT_HEIGHT          = 1;
Const.RECFORMAT_CODEC           = 2;
Const.RECFORMAT_SCAN_TYPE       = 3;
Const.RECFORMAT_BITRATE         = 4;
Const.RECFORMAT_CHROMA          = 5;
Const.RECFORMAT_DISPLAY_FORMAT  = 6;

/* 記録フォーマット設定値一覧.xlsxの内容を元にパターンを追加すること */
Const.RECFORMAT_RESOLUTION_XAVC_4K_Class480     = [4096, 2160,'XAVC',   'Progressive', 480, '4:2:2', 'XAVC 4K C480'];
Const.RECFORMAT_RESOLUTION_XAVC_4K_Class300     = [4096, 2160,'XAVC',   'Progressive', 300, '4:2:2', 'XAVC 4K C300'];
Const.RECFORMAT_RESOLUTION_XAVC_4K_Class240     = [4096, 2160,'XAVC',   'Progressive', 240, '4:2:2', 'XAVC 4K C300'];
Const.RECFORMAT_RESOLUTION_XAVC_QFHD_Class480   = [3840, 2160,'XAVC',   'Progressive', 480, '4:2:2', 'XAVC QFHD C480'];
Const.RECFORMAT_RESOLUTION_XAVC_QFHD_Class300   = [3840, 2160,'XAVC',   'Progressive', 300, '4:2:2', 'XAVC QFHD C300'];
Const.RECFORMAT_RESOLUTION_XAVC_QFHD_Class250   = [3840, 2160,'XAVC',   'Progressive', 250, '4:2:2', 'XAVC QFHD C300'];
Const.RECFORMAT_RESOLUTION_XAVC_QFHD_Class240   = [3840, 2160,'XAVC',   'Progressive', 240, '4:2:2', 'XAVC QFHD C300'];
Const.RECFORMAT_RESOLUTION_XAVC_2K              = [2048, 1080,'XAVC',   'Progressive', 100, '4:2:2', 'XAVC 2K'];
Const.RECFORMAT_RESOLUTION_XAVC_HD              = [1920, 1080,'XAVC',   'Progressive', 100, '4:2:2', 'XAVC HD'];
Const.RECFORMAT_RESOLUTION_MPEG_HD_P            = [1920, 1080,'MPEG2',  'Progressive', 50,  '4:2:2', 'MPEG HD P'];
Const.RECFORMAT_RESOLUTION_MPEG_HD_I            = [1920, 1080,'MPEG2',  'Interleave' , 50,  '4:2:2', 'MPEG HD i'];
Const.RECFORMAT_RESOLUTION_PRORES_4444_HD_P     = [1920, 1080,'ProRes', 'Progressive', 147, '4:4:4', 'ProRes 4444 HD P'];
Const.RECFORMAT_RESOLUTION_PRORES_422_HQ_HD_P   = [1920, 1080,'ProRes', 'Progressive', 220, '4:2:2', 'ProRes422HQ HD P'];
Const.RECFORMAT_RESOLUTION_PRORES_422_HQ_HD_I   = [1920, 1080,'ProRes', 'Interleave',  220, '4:2:2', 'ProRes422HQ HD i'];
Const.RECFORMAT_RESOLUTION_PRORES_422_HD_P      = [1920, 1080,'ProRes', 'Progressive', 147, '4:2:2', 'ProRes 422 HD P'];
Const.RECFORMAT_RESOLUTION_PRORES_422_HD_I      = [1920, 1080,'ProRes', 'Interleave',  147, '4:2:2', 'ProRes 422 HD i'];
Const.RECFORMAT_RESOLUTION_PRORES_PROXY_HD_P    = [1920, 1080,'ProRes', 'Progressive', 50/*Dummy*/,  '4:2:2', 'ProRes Proxy HD P'];
Const.RECFORMAT_RESOLUTION_PRORES_PROXY_HD_I    = [1920, 1080,'ProRes', 'Interleave',  50/*Dummy*/,  '4:2:2', 'ProRes Proxy HD i'];

/*!
 * @brief CameraID関連
 */
Const.INDEX_CAMERA_ID_COLOR_NAME  = 0;
Const.INDEX_CAMERA_ID_COLOR_VALUE = 1;
Const.CAMERA_ID_COLOR_LIST = [
    [ 'white'  , 'RGB(255,255,255)'],
    [ 'yellow' , 'RGB(255,255,0)'  ],
    [ 'cyan'   , 'RGB(0,255,255)'  ],
    [ 'green'  , 'RGB(0,255,0)'    ],
    [ 'magenta', 'RGB(255,0,255)'  ],
    [ 'red'    , 'RGB(255,0,0)'    ],
    [ 'blue'   , 'RGB(0,0,255)'    ]
];

/*!
 * @brief Lens関連
 */
Const.STRID_PFX_ID727000_NOINFO = '---';					// レンズから情報が得られない場合.

Const.ROUND_NUMBER_FOR_INTEGER = 0;							// 四捨五入する桁(整数表示の場合).
Const.ROUND_NUMBER_FOR_DECIMAL = 1;							// 小数以下がこの桁数になるように四捨五入(少数表示の場合).

/*!
 * @brief Iris関連
 */
Const.STRID_PFX_ID704100_IRIS_T_NUMBER = 'T';
Const.STRID_PFX_ID726300_IRIS_F_NUMBER = 'F';
Const.STRID_PFX_ID704200_IRIS_CLOSE = 'C';					// Iris Close.
Const.IRIS_CLOSE_NUMERATOR = 0xFFFFFFFF;
Const.IRIS_CLOSE_DENOMINATOR = 1;
Const.IRIS_DENOMINATOR_INVALID = 0;
Const.IRIS_POS_NUMERATOR_INIT = 0;
Const.IRIS_POS_DENOMINATOR_INIT = 10000;

/*!
 * @brief Focus関連
 */
Const.STRID_PFX_ID703800_UNIT_FEET = 'ft';					// Feet.
Const.STRID_PFX_ID703900_UNIT_METER = 'm';					// Meter.
Const.STRID_PFX_ID704000_FOCUS_INFINITY = '&infin;';		// Infinity(∞).
Const.FOCUS_POS_MAX = 999.9;
Const.FOCUS_POS_MIN = 0.0;
Const.FOCUS_POS_NUMERATOR_INIT = 0;
Const.FOCUS_POS_DENOMINATOR_INIT = 10000;
Const.FOCUS_SEND_INTERVAL_TIME = 1000;						// (相対値APIの場合、)定期的にコマンドを送る.
Const.FOCUS_DENOMINATOR_INVALID = 0;

/*!
 * @brief Zoom関連
 */
Const.STRID_PFX_ID726400_CODE_MM = 'mm';					// Millimeter.
Const.ZOOM_POS_MAX = 9999.0;
Const.ZOOM_POS_MIN = -999.0;
Const.ZOOM_SEND_INTERVAL_TIME = 1000;						// (相対値APIの場合、)定期的にコマンドを送る.

/*!
 * @brief 画面状態通知関連
 */
Const.DISPID_BIG6			= 0x0000;
Const.DISPID_BIG6_FPS		= ( Const.DISPID_BIG6 << 16 ) | 0x0001;	// BIG6 FPS設定画面		(0x00000001).
Const.DISPID_BIG6_EI		= ( Const.DISPID_BIG6 << 16 ) | 0x0002;	// BIG6 EI設定画面		(0x00000002).
Const.DISPID_BIG6_SHUTTER	= ( Const.DISPID_BIG6 << 16 ) | 0x0003;	// BIG6 SUTTER設定画面	(0x00000003).
Const.DISPID_BIG6_ND		= ( Const.DISPID_BIG6 << 16 ) | 0x0004;	// BIG6 ND設定画面		(0x00000004).
Const.DISPID_BIG6_LUT		= ( Const.DISPID_BIG6 << 16 ) | 0x0005;	// BIG6 LUT設定画面		(0x00000005).
Const.DISPID_BIG6_WB 		= ( Const.DISPID_BIG6 << 16 ) | 0x0006;	// BIG6 WB設定画面		(0x00000006).
Const.DISPID_BIG6_GAIN		= ( Const.DISPID_BIG6 << 16 ) | 0x0007;	// BIG6 GAIN設定画面		(0x00000007).
Const.DISPID_MESSAGE					= 0x0001;
Const.DISPID_AWB_EXECUTE_WAIT_MESSAGE	= ( Const.DISPID_MESSAGE << 16 ) | 0x0001;	// AWB_EXECUTE_WAITメッセージ	(0x00010001).
Const.DISPID_AWB_ADD_MESSAGE			= ( Const.DISPID_MESSAGE << 16 ) | 0x0002;	// AWB_ADD_WAITメッセージ		(0x00010002).

/*!
 * @brief AllFile関連
 */
Const.ALLFILE_NO       = 0;
Const.ALLFILE_FILENAME = 1;
Const.ALLFILE_DATETIME = 2;
Const.ALLFILE_LIST_MAX = 64;
Const.ALLFILE_DEFAULT_INDEX = -1;
Const.ALLFILE_MENU_INDEX_LOAD_SD_CARD = 0;
Const.ALLFILE_MENU_INDEX_SAVE_SD_CARD = 1;
Const.ALLFILE_MENU_INDEX_FILE_ID      = 2;
Const.ALLFILE_OK       = 0;
Const.ALLFILE_NG       = 1;
Const.ALLFILE_RESULT_ID_LOAD_NG_RR_CONNECTSTATUS_MISMATCH        = 1;   // Cannot Load All Files. AXS recorder missing.
Const.ALLFILE_RESULT_ID_LOAD_NG_LICENSEOPTION_MISMATCH_ANAMO_4_3 = 2;   // Cannot Load All Files. Anamorphic license missing.
Const.ALLFILE_RESULT_ID_LOAD_NG_LICENSEOPTION_MISMATCH_FF_3_2    = 3;   // Cannot Load All Files. Full-Frame license missing.
Const.ALLFILE_RESULT_ID_LOAD_NG_LICENSEOPTION_MISMATCH_HFR       = 6;   // Cannot Load All Files. High Frame Rate license missing.
Const.ALLFILE_RESULT_ID_LOAD_NG_PAINT_DATA_CANNOT_LOAD           = 7;   // Cannot Load All Files. File does not contain Paint data.
Const.ALLFILE_RESULT_ID_MESSAGE_CLEAR                            = 5;   // For Message Clear
Const.ALLFILE_NULL_STR         = "\0";
Const.ALLFILE_STR_EXECUTING                   = ' </br> </br> Executing...';
Const.ALLFILE_STR_LOAD_FILE_TITLE             = 'All File: Load SD Card';
Const.ALLFILE_STR_SAVE_FILE_TITLE             = 'All File: Save SD Card';
Const.ALLFILE_STR_REBOOTING                   = ' Rebooting…';
Const.ALLFILE_STR_CANNOT_LOAD_ALL_FILE        = 'Cannot load All File.';
Const.ALLFILE_STR_AXS_RECORDER_MISSING        = ' </br> </br> AXS recorder missing.';
Const.ALLFILE_STR_ANAMORPHIC_LICENSE_MISSING  = ' </br> </br> Anamorphic license missing.';
Const.ALLFILE_STR_FULL_FRAME_LICENSE_MISSING  = ' </br> </br> Full-Frame license missing.';
Const.ALLFILE_STR_HFR_LICENSE_MISSING         = ' </br> </br> High Frame Rate license missing.';
Const.ALLFILE_STR_PAINT_DATA_CANNOT_LOAD      = ' </br> </br> File does not contain Paint data.';
Const.ALLFILE_LOAD_FILE_ITMEID                = 16777747;
Const.ALLFILE_SAVE_FILE_ITMEID                = 16777748;
Const.ALLFILE_FILEID_ITMEID                   = 16777749;
Const.ALLFILE_BUTTON_NAME_EXECUTE             = 'Execute';

/*!
 * @brief UserGamma関連
 */
Const.USERGAMMA_INDEX    = 0;
Const.USERGAMMA_FILENAME = 1;
Const.USERGAMMA_DATE     = 2;
Const.USERGAMMA_TIME     = 3;
Const.USERGAMMA_COMMENT  = 4;
Const.USERGAMMA_DATA_MAX = 5;
Const.USERGAMMA_DEFAULT_INDEX = -1;
Const.USERGAMMA_LIST_MAX = 5;
Const.USERGAMMA_LIST_DISP_MAX = 9;
Const.USERGAMMA_MENU_CURRENT_SETTINGS = 0;
Const.USERGAMMA_MENU_LOAD_FILE        = 1;
Const.USERGAMMA_STR_CURRENT_SETTINGS_TITLE = 'User Gamma: Current Settings';
Const.USERGAMMA_STR_LOAD_FILE_TITLE        = 'User Gamma: Load SD Card';
Const.USERGAMMA_WEBAPP_RESULT_MESSAGE_CLOSE     = -1;  /* メッセージのみ消去 */
Const.USERGAMMA_WEBAPP_RESULT_OK                =  0;
Const.USERGAMMA_WEBAPP_RESULT_NG                =  1;

Const.DATEMODE_YYMMDD = 0;
Const.DATEMODE_MMDDYY = 1;
Const.DATEMODE_DDMMYY = 2;
Const.DATEMODE_MONTH_STR_LIST = [
	'',
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
]


/*!
 * @brief 本体Busy状態通知
 */
Const.MESSAGE_CAMERA_IS_BUSY = 'Not Available' + '<br><br>' + 'Camcorder is busy';

/*!
 * @brief 本体Disconnect状態通知
 */
Const.MESSAGE_CAMERA_IS_DISCONNECTED = 'Camcorder is disconnected.';

/*!
 * @brief Webで使用できない機能通知
 */
Const.MESSAGE_NOT_AVAILABLE_ON_WEB_REMOTE = 'This function is not available' + '<br><br>' + 'on web remote control.';

/*!
 * @brief 実行不可通知
 */
Const.MESSAGE_CANNOT_PROCEED = 'Cannot Proceed';

/*!
 * @brief 記録中実行不可通知
 */
Const.MESSAGE_CANNOT_PROCEED_RECORDING = 'Cannot Proceed' + '<br><br>' + 'Recording';

/*!
 * @brief Marker関連
 */
// UserFrameLine
Const.USER_BOX_PRESET_ASPECT_SELECT_190_1					= 12;					// [Preset Aspect Ratio]の設定が「1.90:1」

/*!
 * @brief メッセージ表示レイヤのレベル(値はz-index値）
 */
Const.MESSAGE_LAYER_HELP                                    =  200;
Const.MESSAGE_LAYER_OPERATIONREQUEST                        =  201;
Const.MESSAGE_LAYER_EXECUTE_WAIT                            =  202;
Const.MESSAGE_LAYER_EXECUTE_RUN                             =  203;
Const.MESSAGE_LAYER_EXECUTE_RESULT                          =  204;
Const.MESSAGE_LAYER_NOTICE                                  =  205;

/*!
 * @brief 本体メッセージ種別ID定義
 * @note MessageIDDefine.hppと同期させること.
 */
Const.CAM_DISPID_NULL                                           =  0x00000000;

// MessageBaseMode.
Const.MESSAGE_BASE_MODE_BASE                                    =  100000000;
Const.MESSAGE_BASE_MODE_ERROR                                   =  1 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_WARNING                                 =  2 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_NOTICE                                  =  3 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_EXECUTE_RESULT                          =  4 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_EXECUTE_RUN                             =  5 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                            =  6 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                        =  7 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_OPERATIONREQUEST_PRI                    =  8 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_HELP                                    =  9 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_VOLUME                                  =  10 * Const.MESSAGE_BASE_MODE_BASE;
Const.MESSAGE_BASE_MODE_WARNING_INFO_ONLY                       =  11 * Const.MESSAGE_BASE_MODE_BASE;

// Web App Original Start.
Const.MESSAGE_BASE_MODE_CURRENT                                 =  2000000000;
Const.MESSAGE_BASE_MODE_NOTICE_CURRENT                          =  Const.MESSAGE_BASE_MODE_NOTICE           + Const.MESSAGE_BASE_MODE_CURRENT;
Const.MESSAGE_BASE_MODE_EXECUTE_RESULT_CURRENT                  =  Const.MESSAGE_BASE_MODE_EXECUTE_RESULT   + Const.MESSAGE_BASE_MODE_CURRENT;
Const.MESSAGE_BASE_MODE_EXECUTE_RUN_CURRENT                     =  Const.MESSAGE_BASE_MODE_EXECUTE_RUN      + Const.MESSAGE_BASE_MODE_CURRENT;
Const.MESSAGE_BASE_MODE_EXECUTE_WAIT_CURRENT                    =  Const.MESSAGE_BASE_MODE_EXECUTE_WAIT     + Const.MESSAGE_BASE_MODE_CURRENT;
Const.MESSAGE_BASE_MODE_OPERATIONREQUEST_CURRENT                =  Const.MESSAGE_BASE_MODE_OPERATIONREQUEST + Const.MESSAGE_BASE_MODE_CURRENT;
// Web App Original End.

// MessageModeFlag.
Const.MESSAGEMODEFLAG_WITH_BUTTON                               = (1 << 0) * 100000;
Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR                          = (1 << 1) * 100000;
Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                             = 1        * 10000000;
Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                             = 2        * 10000000;
Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                           = 3        * 10000000;
Const.MESSAGEMODEFLAG_TEXT_LINE_FOUR                            = 4        * 10000000;

Const.MESSAGEMODEFLAG_EXECUTERUN_CRYSTAL                        = (1 << 2) * 100000;
Const.MESSAGEMODEFLAG_EXECUTERUN_CANCEL_BUTTONLESS              = (1 << 3) * 100000;

Const.MESSAGEMODEFLAG_EXECUTEWAIT_EASYSETUP                     = (1 << 3) * 100000;
Const.MESSAGEMODEFLAG_EXECUTEWAIT_APR                           = (1 << 4) * 100000;
Const.MESSAGEMODEFLAG_EXECUTEWAIT_AWB                           = (1 << 5) * 100000;
Const.MESSAGEMODEFLAG_EXECUTEWAIT_SALVAGE                       = (1 << 6) * 100000;

Const.MESSAGEMODEFLAG_WARNING_MESS_ICON_X                       = Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGEMODEFLAG_WARNING_MESS_ICON_I                       = Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR;
Const.MESSAGEMODEFLAG_WARNING_MESS_LOWPRI                       = (1 << 2) * 100000;

Const.MESSAGEMODEFLAG_OPERATION_REQUEST_HIGHPRI                 = Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR;
Const.MESSAGEMODEFLAG_OPERATION_REQUEST_APR                     = (1 << 2) * 100000;


// MessageMode.
Const.MESSAGE_MODE_BASE                                         = 10000;
Const.MESSAGE_MODE_ERROR                                        = Const.MESSAGE_BASE_MODE_ERROR;

Const.MESSAGE_MODE_WARNING_ICON_X                               = Const.MESSAGE_BASE_MODE_WARNING                         + Const.MESSAGEMODEFLAG_WARNING_MESS_ICON_X;
Const.MESSAGE_MODE_WARNING_ICON_X_LOWPRI                        = Const.MESSAGE_BASE_MODE_WARNING                         + Const.MESSAGEMODEFLAG_WARNING_MESS_ICON_X            + Const.MESSAGEMODEFLAG_WARNING_MESS_LOWPRI;
Const.MESSAGE_MODE_WARNING_ICON_I                               = Const.MESSAGE_BASE_MODE_WARNING                         + Const.MESSAGEMODEFLAG_WARNING_MESS_ICON_I;
Const.MESSAGE_MODE_WARNING_ICON_I_LOWPRI                        = Const.MESSAGE_BASE_MODE_WARNING                         + Const.MESSAGEMODEFLAG_WARNING_MESS_ICON_I            + Const.MESSAGEMODEFLAG_WARNING_MESS_LOWPRI;

Const.MESSAGE_MODE_WARNING_INFO_ONLY                            = Const.MESSAGE_BASE_MODE_WARNING_INFO_ONLY;

Const.MESSAGE_MODE_NOTICE_SINGLELABEL                           = Const.MESSAGE_BASE_MODE_NOTICE                          + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE;
Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                           = Const.MESSAGE_BASE_MODE_NOTICE                          + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO;
Const.MESSAGE_MODE_NOTICE_TRIPLELABEL                           = Const.MESSAGE_BASE_MODE_NOTICE                          + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE;

Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL                   = Const.MESSAGE_BASE_MODE_EXECUTE_RESULT                  + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO;
Const.MESSAGE_MODE_EXECUTE_RESULT_SINGLELABEL                   = Const.MESSAGE_BASE_MODE_EXECUTE_RESULT                  + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE;
Const.MESSAGE_MODE_EXECUTE_RESULT_TRIPLELABEL                   = Const.MESSAGE_BASE_MODE_EXECUTE_RESULT                  + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE;
Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM           = Const.MESSAGE_BASE_MODE_EXECUTE_RESULT                  + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGE_MODE_EXECUTE_RESULT_SINGLELABEL_CONFIRM           = Const.MESSAGE_BASE_MODE_EXECUTE_RESULT                  + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGE_MODE_EXECUTE_RESULT_TRIPLELABEL_CONFIRM           = Const.MESSAGE_BASE_MODE_EXECUTE_RESULT                  + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_WITH_BUTTON;


Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL_CANCEL               = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL_CANCEL_BUTTONLESS    = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_EXECUTERUN_CANCEL_BUTTONLESS;
Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL                      = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO;
Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL_PROGRESSBAR          = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR;
Const.MESSAGE_MODE_EXECUTE_RUN_SINGLELABEL_PROGRESSBAR_CANCEL   = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR                   + Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGE_MODE_EXECUTE_RUN_SINGLELABEL                      = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE;
Const.MESSAGE_MODE_EXECUTE_RUN_SINGLELABEL_PROGRESSBAR          = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR;
Const.MESSAGE_MODE_EXECUTE_RUN_CRYSTAL                          = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_EXECUTERUN_CRYSTAL;
Const.MESSAGE_MODE_EXECUTE_RUN_TRIPLELABEL_PROGRESSBAR_CANCEL   = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR                   + Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGE_MODE_EXECUTE_RUN_TRIPLELABEL_PROGRESSBAR          = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_WITH_PROGRESSBAR;
Const.MESSAGE_MODE_EXECUTE_RUN_TRIPLELABEL                      = Const.MESSAGE_BASE_MODE_EXECUTE_RUN                     + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE;

Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL                     = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO;
Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL_APR                 = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_EXECUTEWAIT_APR;
Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL_SALVAGE             = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_EXECUTEWAIT_SALVAGE;
Const.MESSAGE_MODE_EXECUTE_WAIT_SINGLELABEL                     = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE;
Const.MESSAGE_MODE_EXECUTE_WAIT_TRIPLELABEL                     = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE;
Const.MESSAGE_MODE_EXECUTE_WAIT_TRIPLELABEL_APR                 = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_EXECUTEWAIT_APR;
Const.MESSAGE_MODE_EXECUTE_WAIT_TRIPLELABEL_AWB                 = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_EXECUTEWAIT_AWB;
Const.MESSAGE_MODE_EXECUTE_WAIT_EASYSETUP                       = Const.MESSAGE_BASE_MODE_EXECUTE_WAIT                    + Const.MESSAGEMODEFLAG_EXECUTEWAIT_EASYSETUP;

Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL                 = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO;
Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM         = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGE_MODE_OPERATIONREQUEST_SINGLELABEL                 = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE;
Const.MESSAGE_MODE_OPERATIONREQUEST_SINGLELABEL_CONFIRM         = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_WITH_BUTTON;
Const.MESSAGE_MODE_OPERATIONREQUEST_SINGLELABEL_CONFIRM_APR     = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_WITH_BUTTON                        + Const.MESSAGEMODEFLAG_OPERATION_REQUEST_APR;
Const.MESSAGE_MODE_OPERATIONREQUEST_TRIPLELABEL                 = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE;
Const.MESSAGE_MODE_OPERATIONREQUEST_TRIPLELABEL_CONFIRM         = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_WITH_BUTTON;

Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_HIGHPRI         = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_OPERATION_REQUEST_HIGHPRI;
Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM_HIGHPRI = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO                  + Const.MESSAGEMODEFLAG_WITH_BUTTON                        + Const.MESSAGEMODEFLAG_OPERATION_REQUEST_HIGHPRI;
Const.MESSAGE_MODE_OPERATIONREQUEST_SINGLELABEL_HIGHPRI         = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_OPERATION_REQUEST_HIGHPRI;
Const.MESSAGE_MODE_OPERATIONREQUEST_SINGLELABEL_CONFIRM_HIGHPRI = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE                  + Const.MESSAGEMODEFLAG_WITH_BUTTON                        + Const.MESSAGEMODEFLAG_OPERATION_REQUEST_HIGHPRI;
Const.MESSAGE_MODE_OPERATIONREQUEST_TRIPLELABEL_HIGHPRI         = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_OPERATION_REQUEST_HIGHPRI;
Const.MESSAGE_MODE_OPERATIONREQUEST_TRIPLELABEL_CONFIRM_HIGHPRI = Const.MESSAGE_BASE_MODE_OPERATIONREQUEST                + Const.MESSAGEMODEFLAG_TEXT_LINE_THREE                + Const.MESSAGEMODEFLAG_WITH_BUTTON                        + Const.MESSAGEMODEFLAG_OPERATION_REQUEST_HIGHPRI;

Const.MESSAGE_MODE_HELP_DOUBLELABEL                             = Const.MESSAGE_BASE_MODE_HELP                            + Const.MESSAGEMODEFLAG_TEXT_LINE_TWO;
Const.MESSAGE_MODE_HELP_SINGLELABEL                             = Const.MESSAGE_BASE_MODE_HELP                            + Const.MESSAGEMODEFLAG_TEXT_LINE_ONE;

Const.MESSAGE_MODE_VOLUME_BAR                                   = Const.MESSAGE_BASE_MODE_VOLUME;


// Messege ID
//<! error.
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_1                      = Const.MESSAGE_MODE_ERROR                                + 13;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_2                      = Const.MESSAGE_MODE_ERROR                                + 14;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_3                      = Const.MESSAGE_MODE_ERROR                                + 15;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_4                      = Const.MESSAGE_MODE_ERROR                                + 16;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_5                      = Const.MESSAGE_MODE_ERROR                                + 17;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_6                      = Const.MESSAGE_MODE_ERROR                                + 18;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_7                      = Const.MESSAGE_MODE_ERROR                                + 19;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_8                      = Const.MESSAGE_MODE_ERROR                                + 20;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_9                      = Const.MESSAGE_MODE_ERROR                                + 21;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_10                     = Const.MESSAGE_MODE_ERROR                                + 22;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_11                     = Const.MESSAGE_MODE_ERROR                                + 23;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_12                     = Const.MESSAGE_MODE_ERROR                                + 24;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_13                     = Const.MESSAGE_MODE_ERROR                                + 25;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_14                     = Const.MESSAGE_MODE_ERROR                                + 26;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_15                     = Const.MESSAGE_MODE_ERROR                                + 27;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_16                     = Const.MESSAGE_MODE_ERROR                                + 28;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_17                     = Const.MESSAGE_MODE_ERROR                                + 29;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_18                     = Const.MESSAGE_MODE_ERROR                                + 30;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_19                     = Const.MESSAGE_MODE_ERROR                                + 31;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_20                     = Const.MESSAGE_MODE_ERROR                                + 32;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_21                     = Const.MESSAGE_MODE_ERROR                                + 33;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_22                     = Const.MESSAGE_MODE_ERROR                                + 34;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_23                     = Const.MESSAGE_MODE_ERROR                                + 35;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_24                     = Const.MESSAGE_MODE_ERROR                                + 36;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_25                     = Const.MESSAGE_MODE_ERROR                                + 37;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_26                     = Const.MESSAGE_MODE_ERROR                                + 38;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_27                     = Const.MESSAGE_MODE_ERROR                                + 39;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_28                     = Const.MESSAGE_MODE_ERROR                                + 40;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_29                     = Const.MESSAGE_MODE_ERROR                                + 41;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_30                     = Const.MESSAGE_MODE_ERROR                                + 42;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_31                     = Const.MESSAGE_MODE_ERROR                                + 43;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_32                     = Const.MESSAGE_MODE_ERROR                                + 44;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_33                     = Const.MESSAGE_MODE_ERROR                                + 45;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_34                     = Const.MESSAGE_MODE_ERROR                                + 46;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_35                     = Const.MESSAGE_MODE_ERROR                                + 47;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_36                     = Const.MESSAGE_MODE_ERROR                                + 48;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_37                     = Const.MESSAGE_MODE_ERROR                                + 49;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_38                     = Const.MESSAGE_MODE_ERROR                                + 50;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_39                     = Const.MESSAGE_MODE_ERROR                                + 51;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_40                     = Const.MESSAGE_MODE_ERROR                                + 52;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_41                     = Const.MESSAGE_MODE_ERROR                                + 53;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_42                     = Const.MESSAGE_MODE_ERROR                                + 54;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_43                     = Const.MESSAGE_MODE_ERROR                                + 55;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_44                     = Const.MESSAGE_MODE_ERROR                                + 56;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_45                     = Const.MESSAGE_MODE_ERROR                                + 57;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_46                     = Const.MESSAGE_MODE_ERROR                                + 58;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_47                     = Const.MESSAGE_MODE_ERROR                                + 59;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_48                     = Const.MESSAGE_MODE_ERROR                                + 60;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_49                     = Const.MESSAGE_MODE_ERROR                                + 61;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_50                     = Const.MESSAGE_MODE_ERROR                                + 62;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_51                     = Const.MESSAGE_MODE_ERROR                                + 63;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_52                     = Const.MESSAGE_MODE_ERROR                                + 64;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_53                     = Const.MESSAGE_MODE_ERROR                                + 65;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_54                     = Const.MESSAGE_MODE_ERROR                                + 66;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_55                     = Const.MESSAGE_MODE_ERROR                                + 67;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_56                     = Const.MESSAGE_MODE_ERROR                                + 68;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_57                     = Const.MESSAGE_MODE_ERROR                                + 69;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_58                     = Const.MESSAGE_MODE_ERROR                                + 70;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_59                     = Const.MESSAGE_MODE_ERROR                                + 71;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_60                     = Const.MESSAGE_MODE_ERROR                                + 72;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_61                     = Const.MESSAGE_MODE_ERROR                                + 73;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_62                     = Const.MESSAGE_MODE_ERROR                                + 74;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_63                     = Const.MESSAGE_MODE_ERROR                                + 75;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_64                     = Const.MESSAGE_MODE_ERROR                                + 76;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_65                     = Const.MESSAGE_MODE_ERROR                                + 77;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_66                     = Const.MESSAGE_MODE_ERROR                                + 78;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_67                     = Const.MESSAGE_MODE_ERROR                                + 79;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_68                     = Const.MESSAGE_MODE_ERROR                                + 80;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_69                     = Const.MESSAGE_MODE_ERROR                                + 81;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_70                     = Const.MESSAGE_MODE_ERROR                                + 82;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_71                     = Const.MESSAGE_MODE_ERROR                                + 83;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_72                     = Const.MESSAGE_MODE_ERROR                                + 84;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_73                     = Const.MESSAGE_MODE_ERROR                                + 85;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_74                     = Const.MESSAGE_MODE_ERROR                                + 86;
Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_75                     = Const.MESSAGE_MODE_ERROR                                + 87;

//<! warning.
Const.MESSAGE_WARNING_REC_MEDIA_FULL                            = Const.MESSAGE_MODE_WARNING_ICON_X_LOWPRI                + 1;
Const.MESSAGE_WARNING_BATTERY_END                               = Const.MESSAGE_MODE_WARNING_ICON_X                       + 3;
Const.MESSAGE_WARNING_INSUFFICIENT_VOLTAGE                      = Const.MESSAGE_MODE_WARNING_ICON_X                       + 4;
Const.MESSAGE_WARNING_EXTIF_ERR                                 = Const.MESSAGE_MODE_WARNING_ICON_X                       + 8;
Const.MESSAGE_WARNING_RR_ALERT                                  = Const.MESSAGE_MODE_WARNING_ICON_X                       + 9;
Const.MESSAGE_WARNING_RR_DETECT_UNUSABLE_VERSION                = Const.MESSAGE_MODE_WARNING_ICON_X                       + 10;
Const.MESSAGE_WARNING_LENS_IF_ERROR                             = Const.MESSAGE_MODE_WARNING_ICON_I                       + 6;

//<! warning info only
Const.MESSAGE_WARNING_FAN_STOPPED                               = Const.MESSAGE_MODE_WARNING_INFO_ONLY                    + 1;
Const.MESSAGE_WARNING_EXT_FAN_STOPPED                           = Const.MESSAGE_MODE_WARNING_INFO_ONLY                    + 2;
Const.MESSAGE_WARNING_BACKUP_BATT_END                           = Const.MESSAGE_MODE_WARNING_INFO_ONLY                    + 3;
Const.MESSAGE_WARNING_AES_EBU_EMPHASIS                          = Const.MESSAGE_MODE_WARNING_INFO_ONLY                    + 4;
Const.MESSAGE_WARNING_AES_EBU_NOT_PRO_USE                       = Const.MESSAGE_MODE_WARNING_INFO_ONLY                    + 5;
Const.MESSAGE_WARNING_MAIN_BOARD_TEMP_HIGH                      = Const.MESSAGE_MODE_WARNING_INFO_ONLY                    + 8;
Const.MESSAGE_WARNING_RR_ALERT_TEMP_HIGH                        = Const.MESSAGE_MODE_WARNING_INFO_ONLY                    + 9;

//<! notice.
Const.MESSAGE_NOTICE_RECORD_READONLYMEDIA                       = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 20;
Const.MESSAGE_NOTICE_CANNOT_SWITCHSLOTS                         = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 21;
Const.MESSAGE_NOTICE_RESULT_SWITCHED_SLOT                       = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 58;
Const.MESSAGE_NOTICE_CANNOT_REC_REVIEW                          = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 59;
Const.MESSAGE_NOTICE_RECORD_READONLYMEDIA_AXS                   = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 74;
Const.MESSAGE_NOTICE_RECORD_MEDIA_CAN_NOT_MOUNT_AXS             = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 77;
Const.MESSAGE_NOTICE_RESULT_SWITCHED_SLOT_SXS_A_NOT_GUARANTEED  = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 81;
Const.MESSAGE_NOTICE_RESULT_SWITCHED_SLOT_SXS_B_NOT_GUARANTEED  = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 82;
Const.MESSAGE_NOTICE_RESULT_SWITCHED_SLOT_AXS_A_NOT_GUARANTEED  = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 83;
Const.MESSAGE_NOTICE_RESULT_SWITCHED_SLOT_AXS_B_NOT_GUARANTEED  = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 84;
Const.MESSAGE_NOTICE_FPS_SET_TO_FIX                             = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 89;
Const.MESSAGE_NOTICE_RECORD_WRITEPROTECTED                      = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 3;
Const.MESSAGE_NOTICE_RECORD_WRITEPROTECTED_AXS                  = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 73;
Const.MESSAGE_NOTICE_RECORD_NOMEDIA                             = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 2;
Const.MESSAGE_NOTICE_RECORD_NOMEDIA_AXS                         = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 75;
Const.MESSAGE_NOTICE_RECORD_MEDIAFULL                           = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 4;
Const.MESSAGE_NOTICE_RECORD_MEDIAFULL_AXS                       = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 76;
Const.MESSAGE_NOTICE_RECORD_REACHEDCLIPNUMBERLIMIT              = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 2;
Const.MESSAGE_NOTICE_RECORD_REACHEDCLIPNUMBERLIMIT_AXS          = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 28;
Const.MESSAGE_NOTICE_RECORD_REMOVE_MEDIA                        = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 43;
Const.MESSAGE_NOTICE_PROGRESS_SWITCH_SLOTS                      = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 57;
Const.MESSAGE_NOTICE_SUB_REC_SET_TO_OFF                         = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 88;
Const.MESSAGE_NOTICE_PLAYBACK_FIRST_CLIP_TOP                    = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 18;
Const.MESSAGE_NOTICE_PLAYBACK_LAST_CLIP_END                     = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 19;
Const.MESSAGE_NOTICE_AXS_A_OVER_25FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 30;
Const.MESSAGE_NOTICE_AXS_B_OVER_25FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 31;
Const.MESSAGE_NOTICE_AXS_A_OVER_30FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 32;
Const.MESSAGE_NOTICE_AXS_B_OVER_30FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 33;
Const.MESSAGE_NOTICE_SET_CANNOT_PROCEED_RECORDING               = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 9;
Const.MESSAGE_NOTICE_CANNOTPROCEED                              = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 12;
Const.MESSAGE_NOTICE_UNKNOWN_SXS_A                              = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 92;
Const.MESSAGE_NOTICE_UNKNOWN_SXS_B                              = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 93;
Const.MESSAGE_NOTICE_AXS_A_OVER_30FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 34;
Const.MESSAGE_NOTICE_AXS_B_OVER_30FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 35;
Const.MESSAGE_NOTICE_AXS_A_OVER_30FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 36;
Const.MESSAGE_NOTICE_AXS_B_OVER_30FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 37;
Const.MESSAGE_NOTICE_AXS_A_OVER_50FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 38;
Const.MESSAGE_NOTICE_AXS_B_OVER_50FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 39;
Const.MESSAGE_NOTICE_AXS_A_OVER_60FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 40;
Const.MESSAGE_NOTICE_AXS_B_OVER_60FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 41;
Const.MESSAGE_NOTICE_AXS_A_OVER_66FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 42;
Const.MESSAGE_NOTICE_AXS_B_OVER_66FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 43;
Const.MESSAGE_NOTICE_AXS_A_OVER_75FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 44;
Const.MESSAGE_NOTICE_AXS_B_OVER_75FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 45;
Const.MESSAGE_NOTICE_AXS_A_OVER_88FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 46;
Const.MESSAGE_NOTICE_AXS_B_OVER_88FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 47;
Const.MESSAGE_NOTICE_AXS_A_OVER_90FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 48;
Const.MESSAGE_NOTICE_AXS_B_OVER_90FPS                           = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 49;
Const.MESSAGE_NOTICE_AXS_A_OVER_110FPS                          = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 50;
Const.MESSAGE_NOTICE_AXS_B_OVER_110FPS                          = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 51;
Const.MESSAGE_NOTICE_AXS_A_REC_START_WARNING                    = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 94;
Const.MESSAGE_NOTICE_AXS_B_REC_START_WARNING                    = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 95;
Const.MESSAGE_NOTICE_SXS_RECFORMAT_WAS_CHANGED                  = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 96;
Const.MESSAGE_NOTICE_AXS_RECFORMAT_WAS_CHANGED                  = Const.MESSAGE_MODE_NOTICE_SINGLELABEL                   + 97;
Const.MESSAGE_NOTICE_AXS_A_OVER_50FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 52;
Const.MESSAGE_NOTICE_AXS_B_OVER_50FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 53;
Const.MESSAGE_NOTICE_AXS_A_OVER_50FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 54;
Const.MESSAGE_NOTICE_AXS_B_OVER_50FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 55;
Const.MESSAGE_NOTICE_AXS_A_OVER_60FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 56;
Const.MESSAGE_NOTICE_AXS_B_OVER_60FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 57;
Const.MESSAGE_NOTICE_AXS_A_OVER_60FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 58;
Const.MESSAGE_NOTICE_AXS_B_OVER_60FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 59;
Const.MESSAGE_NOTICE_AXS_A_OVER_66FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 61;
Const.MESSAGE_NOTICE_AXS_B_OVER_66FPS_LT                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 62;
Const.MESSAGE_NOTICE_AXS_A_OVER_66FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 63;
Const.MESSAGE_NOTICE_AXS_B_OVER_66FPS_ST                        = Const.MESSAGE_MODE_NOTICE_DOUBLELABEL                   + 64;

//<! execute wait.
Const.MESSAGE_EXECUTE_WAIT_SALVAGECLIP_A                        = Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL_SALVAGE     + 1;
Const.MESSAGE_EXECUTE_WAIT_SALVAGECLIP_B                        = Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL_SALVAGE     + 2;
Const.MESSAGE_EXECUTE_WAIT_SALVAGECLIP_AXS_A                    = Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL_SALVAGE     + 3;
Const.MESSAGE_EXECUTE_WAIT_SALVAGECLIP_AXS_B                    = Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL_SALVAGE     + 4;
Const.MESSAGE_EXECUTE_WAIT_HOUSEKEEPING_A                       = Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL             + 15;
Const.MESSAGE_EXECUTE_WAIT_HOUSEKEEPING_B                       = Const.MESSAGE_MODE_EXECUTE_WAIT_DOUBLELABEL             + 16;
Const.MESSAGE_EXECUTE_WAIT_AWB                                  = Const.MESSAGE_MODE_EXECUTE_WAIT_SINGLELABEL             + 39;

//<! execute run.
Const.MESSAGE_EXECUTE_RUN_SALVAGE_SLOTA                         = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 22;
Const.MESSAGE_EXECUTE_RUN_SALVAGE_SLOTB                         = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 23;
Const.MESSAGE_EXECUTE_RUN_SALVAGE_AXS_SLOTA                     = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 51;
Const.MESSAGE_EXECUTE_RUN_SALVAGE_AXS_SLOTB                     = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 52;
Const.MESSAGE_EXECUTE_RUN_HOUSEKEEPING_SLOTA                    = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 29;
Const.MESSAGE_EXECUTE_RUN_HOUSEKEEPING_SLOTB                    = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 30;
Const.MESSAGE_EXECUTE_RUN_HOUSEKEEPING_AXS_SLOTA                = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 55;
Const.MESSAGE_EXECUTE_RUN_HOUSEKEEPING_AXS_SLOTB                = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 56;
Const.MESSAGE_EXECUTE_RUN_ALL_FILE_REBOOTING                    = Const.MESSAGE_MODE_EXECUTE_RUN_SINGLELABEL              + 3;
Const.MESSAGE_EXECUTE_RUN_AXS_RECFORMAT_CHANGING                = Const.MESSAGE_MODE_EXECUTE_RUN_SINGLELABEL              + 8;
Const.MESSAGE_EXECUTE_RUN_LEVEL_GAUGE_ADJUST_EXECUTE            = Const.MESSAGE_MODE_EXECUTE_RUN_DOUBLELABEL              + 64;

//<! operation request.
Const.MESSAGE_OPERATIONREQUEST_MEDIA_SXS_A_MEDIA_ERR                     = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 69;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_SXS_B_MEDIA_ERR                     = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 70;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_A_MEDIA_ERR                     = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 71;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_B_MEDIA_ERR                     = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 72;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_A_UNKNOWN_AND_CHANGE                = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 13;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_B_UNKNOWN_AND_CHANGE                = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 15;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_A_UNKNOWN_AND_CHANGE            = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 53;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_B_UNKNOWN_AND_CHANGE            = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 54;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_SXS_A_MEDIA_ERR_NEED_RESTORED       = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 55;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_SXS_B_MEDIA_ERR_NEED_RESTORED       = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 56;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_A_MEDIA_ERR_NEED_RESTORED       = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 57;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_B_MEDIA_ERR_NEED_RESTORED       = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 58;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_A_FILESYSTEM_UNSUPPORTED            = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 14;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_B_FILESYSTEM_UNSUPPORTED            = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 16;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_A_MEDIA_FILESYSTEM_UNSUPPORTED  = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 59;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_AXS_B_MEDIA_FILESYSTEM_UNSUPPORTED  = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM + 60;
Const.MESSAGE_OPERATIONREQUEST_RECORDING_HALTED                          = Const.MESSAGE_MODE_OPERATIONREQUEST_SINGLELABEL_CONFIRM + 4;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_A_MOUNT_SUCCESSFUL                  = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM   + 75;
Const.MESSAGE_OPERATIONREQUEST_MEDIA_B_MOUNT_SUCCESSFUL                  = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM   + 76;
Const.MESSAGE_OPERATIONREQUEST_AXS_MEDIA_A_MOUNT_SUCCESSFUL              = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM   + 104;
Const.MESSAGE_OPERATIONREQUEST_AXS_MEDIA_B_MOUNT_SUCCESSFUL              = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM   + 105;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_MEDIA_A_WRITEPROTECT       = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM + 77;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_MEDIA_B_WRITEPROTECT       = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM + 78;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_AXS_MEDIA_A_WRITEPROTECT   = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM + 106;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_AXS_MEDIA_B_WRITEPROTECT   = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM + 107;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_MEDIA_A_REMOVED            = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 79;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_MEDIA_B_REMOVED            = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 80;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_MEDIA_A_FAILED             = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 81;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_MEDIA_B_FAILED             = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 82;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_AXS_MEDIA_A_REMOVED        = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 108;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_AXS_MEDIA_B_REMOVED        = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 109;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_AXS_MEDIA_A_FAILED         = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 110;
Const.MESSAGE_OPERATIONREQUEST_SALVAGE_RESULT_AXS_MEDIA_B_FAILED         = Const.MESSAGE_MODE_EXECUTE_RESULT_DOUBLELABEL_CONFIRM  + 111;
Const.MESSAGE_OPERATIONREQUEST_PB_HALTED_SXS_A                           = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM  + 74;
Const.MESSAGE_OPERATIONREQUEST_PB_HALTED_SXS_B                           = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM  + 75;
Const.MESSAGE_OPERATIONREQUEST_PB_HALTED_AXS_A                           = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM  + 76;
Const.MESSAGE_OPERATIONREQUEST_PB_HALTED_AXS_B                           = Const.MESSAGE_MODE_OPERATIONREQUEST_DOUBLELABEL_CONFIRM  + 77;

//<! execute result.
Const.MESSAGE_EXECUTE_RESULT_SWITCHEDSLOTS                      = Const.MESSAGE_MODE_EXECUTE_RESULT_SINGLELABEL           + 10;


/*!
 * @brief エラー/警告メッセージ表示関連
 * @param Const.ERROR_WARN_MESSAGE_*** = [ID, ICON, TEXT];
 */
/* Index定義 */
Const.ERROR_WARN_MESSAGE_ID   = 0;
Const.ERROR_WARN_MESSAGE_ICON = 1;
Const.ERROR_WARN_MESSAGE_TEXT = 2;
/* アイコンファイル定義 */
Const.ERROR_WARN_MESSAGE_ICON_NON = '';
Const.ERROR_WARN_MESSAGE_ICON_X   = 'Parts_VR_T_CC_Error_Icon.png';
Const.ERROR_WARN_MESSAGE_ICON_I   = 'Parts_VR_T_CC_Caution_Icon.png';

/* エラー/警告メッセージ表示一覧 */
                                                     /* MessageId, IconFile, MessageText */
Const.ERROR_WARN_MESSAGE_E91_145_FROM_INFRA_1      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_1, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-145'];
Const.ERROR_WARN_MESSAGE_E91_1C0_FROM_INFRA_2      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_2, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-1C0'];
Const.ERROR_WARN_MESSAGE_E91_133_FROM_INFRA_3      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_3, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-133'];
Const.ERROR_WARN_MESSAGE_E91_210_FROM_INFRA_4      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_4, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-210'];
Const.ERROR_WARN_MESSAGE_E91_270_FROM_INFRA_5      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_5, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-270'];
Const.ERROR_WARN_MESSAGE_E91_250_FROM_INFRA_6      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_6, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-250'];
Const.ERROR_WARN_MESSAGE_E91_240_FROM_INFRA_7      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_7, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-240'];
Const.ERROR_WARN_MESSAGE_E91_265_FROM_INFRA_8      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_8, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-265'];
Const.ERROR_WARN_MESSAGE_E91_275_FROM_INFRA_9      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_9, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-275'];
Const.ERROR_WARN_MESSAGE_E91_230_FROM_INFRA_10     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_10, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-230'];
Const.ERROR_WARN_MESSAGE_E92_303_FROM_INFRA_11     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_11, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E92-303'];
Const.ERROR_WARN_MESSAGE_E91_360_FROM_INFRA_12     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_12, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-360'];
Const.ERROR_WARN_MESSAGE_E91_380_FROM_INFRA_13     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_13, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-380'];
Const.ERROR_WARN_MESSAGE_E91_390_FROM_INFRA_14     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_14, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-390'];
Const.ERROR_WARN_MESSAGE_E91_350_FROM_INFRA_15     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_15, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-350'];
Const.ERROR_WARN_MESSAGE_E91_370_FROM_INFRA_16     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_16, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-370'];
Const.ERROR_WARN_MESSAGE_E95_318_FROM_INFRA_17     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_17, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-318'];
/* Const.ERROR_WARN_MESSAGE_E01_035_FROM_INFRA_18     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_18, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E01-035']; */
Const.ERROR_WARN_MESSAGE_E91_338_FROM_INFRA_19     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_19, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-338'];
Const.ERROR_WARN_MESSAGE_E91_377_FROM_INFRA_20     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_20, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-377'];
Const.ERROR_WARN_MESSAGE_E91_357_FROM_INFRA_21     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_21, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-357'];
Const.ERROR_WARN_MESSAGE_E91_367_FROM_INFRA_22     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_22, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-367'];
Const.ERROR_WARN_MESSAGE_E91_118_FROM_INFRA_23     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_23, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-118'];
Const.ERROR_WARN_MESSAGE_E91_228_FROM_INFRA_24     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_24, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-228'];
Const.ERROR_WARN_MESSAGE_E91_338_FROM_INFRA_25     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_25, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-338'];
Const.ERROR_WARN_MESSAGE_E91_11D_FROM_INFRA_26     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_26, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-11D'];
Const.ERROR_WARN_MESSAGE_E95_314_FROM_INFRA_27     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_27, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-314'];
Const.ERROR_WARN_MESSAGE_E95_315_FROM_INFRA_28     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_28, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-315'];
Const.ERROR_WARN_MESSAGE_E95_316_FROM_INFRA_29     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_29, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-316'];
Const.ERROR_WARN_MESSAGE_E95_20A_FROM_INFRA_30     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_30, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-20A'];
Const.ERROR_WARN_MESSAGE_E95_20B_FROM_INFRA_31     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_31, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-20B'];
Const.ERROR_WARN_MESSAGE_E92_204_FROM_INFRA_32     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_32, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E92-204'];
Const.ERROR_WARN_MESSAGE_E92_205_FROM_INFRA_33     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_33, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E92-205'];
Const.ERROR_WARN_MESSAGE_E92_206_FROM_INFRA_34     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_34, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E92-206'];
Const.ERROR_WARN_MESSAGE_E95_205_FROM_INFRA_35     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_35, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-205'];
Const.ERROR_WARN_MESSAGE_E95_206_FROM_INFRA_36     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_36, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-206'];
Const.ERROR_WARN_MESSAGE_E95_207_FROM_INFRA_37     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_37, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-207'];
Const.ERROR_WARN_MESSAGE_E95_208_FROM_INFRA_38     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_38, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-208'];
Const.ERROR_WARN_MESSAGE_E95_209_FROM_INFRA_39     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_39, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-209'];
Const.ERROR_WARN_MESSAGE_E95_201_FROM_INFRA_40     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_40, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-201'];
Const.ERROR_WARN_MESSAGE_E95_202_FROM_INFRA_41     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_41, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-202'];
Const.ERROR_WARN_MESSAGE_E95_203_FROM_INFRA_42     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_42, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-203'];
Const.ERROR_WARN_MESSAGE_E95_204_FROM_INFRA_43     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_43, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-204'];
Const.ERROR_WARN_MESSAGE_E95_311_FROM_INFRA_44     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_44, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-311'];
Const.ERROR_WARN_MESSAGE_E91_640_FROM_INFRA_45     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_45, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-640'];
Const.ERROR_WARN_MESSAGE_E91_710_FROM_INFRA_46     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_46, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-710'];
Const.ERROR_WARN_MESSAGE_A0_000_FROM_INFRA_47      = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_47, Const.ERROR_WARN_MESSAGE_ICON_NON, 'A0-000' ];
Const.ERROR_WARN_MESSAGE_E91_280_FROM_INFRA_48     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_48, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-280'];
Const.ERROR_WARN_MESSAGE_E95_124_FROM_INFRA_49     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_49, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-124'];
Const.ERROR_WARN_MESSAGE_E91_1D0_FROM_INFRA_50     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_50, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-1D0'];
Const.ERROR_WARN_MESSAGE_E91_383_FROM_INFRA_51     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_51, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-383'];
Const.ERROR_WARN_MESSAGE_E91_3E3_FROM_INFRA_52     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_52, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-3E3'];
Const.ERROR_WARN_MESSAGE_E95_320_FROM_INFRA_53     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_53, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-320'];
Const.ERROR_WARN_MESSAGE_E95_121_FROM_INFRA_54     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_54, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-121'];
/* Const.ERROR_WARN_MESSAGE_E95_122_FROM_INFRA_55     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_55, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-122']; */
Const.ERROR_WARN_MESSAGE_E91_339_FROM_INFRA_56     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_56, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-339'];
Const.ERROR_WARN_MESSAGE_E91_360_FROM_INFRA_57     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_57, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-360'];
Const.ERROR_WARN_MESSAGE_E95_323_FROM_INFRA_58     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_58, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-323'];
Const.ERROR_WARN_MESSAGE_E91_150_FROM_INFRA_59     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_59, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-150'];
Const.ERROR_WARN_MESSAGE_E91_153_FROM_INFRA_60     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_60, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-153'];
Const.ERROR_WARN_MESSAGE_E91_1F3_FROM_INFRA_61     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_61, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-1F3'];
Const.ERROR_WARN_MESSAGE_E91_3F0_FROM_INFRA_62     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_62, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-3F0'];
Const.ERROR_WARN_MESSAGE_E95_312_FROM_INFRA_63     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_63, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-312'];
Const.ERROR_WARN_MESSAGE_E91_650_FROM_INFRA_64     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_64, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-650'];
Const.ERROR_WARN_MESSAGE_E91_810_FROM_INFRA_65     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_65, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-810'];
Const.ERROR_WARN_MESSAGE_E21_001_FROM_INFRA_66     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_66, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E21-001'];
Const.ERROR_WARN_MESSAGE_E91_66E_FROM_INFRA_67     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_67, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-66E'];
Const.ERROR_WARN_MESSAGE_E91_678_FROM_INFRA_68     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_68, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-678'];
Const.ERROR_WARN_MESSAGE_E91_910_FROM_INFRA_69     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_69, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-910'];
Const.ERROR_WARN_MESSAGE_E91_920_FROM_INFRA_70     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_70, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-920'];
Const.ERROR_WARN_MESSAGE_E91_930_FROM_INFRA_71     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_71, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E91-930'];
Const.ERROR_WARN_MESSAGE_E95_10C_FROM_INFRA_72     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_72, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-10C'];
Const.ERROR_WARN_MESSAGE_E95_10D_FROM_INFRA_73     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_73, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-10D'];
Const.ERROR_WARN_MESSAGE_E95_10E_FROM_INFRA_74     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_74, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-10E'];
Const.ERROR_WARN_MESSAGE_E95_125_FROM_INFRA_75     = [Const.MESSAGEPAGEID_ERROR_MSG_FROM_INFRA_75, Const.ERROR_WARN_MESSAGE_ICON_NON, 'E95-125'];

Const.ERROR_WARN_MESSAGE_EXTIF_ERR                  = [Const.MESSAGE_WARNING_EXTIF_ERR,                  Const.ERROR_WARN_MESSAGE_ICON_X, 'EXT. I/F Signal Error'];
Const.ERROR_WARN_MESSAGE_MEDIA_FULL                 = [Const.MESSAGE_WARNING_REC_MEDIA_FULL,             Const.ERROR_WARN_MESSAGE_ICON_X, 'Media Full'];
Const.ERROR_WARN_MESSAGE_BATTERY_END                = [Const.MESSAGE_WARNING_BATTERY_END,                Const.ERROR_WARN_MESSAGE_ICON_X, 'Battery End'];
Const.ERROR_WARN_MESSAGE_INSUFFICIENT_VOLTAGE       = [Const.MESSAGE_WARNING_INSUFFICIENT_VOLTAGE,       Const.ERROR_WARN_MESSAGE_ICON_X, 'Insufficient Voltage'];
Const.ERROR_WARN_MESSAGE_RR_DETECT_UNUSABLE_VERSION = [Const.MESSAGE_WARNING_RR_DETECT_UNUSABLE_VERSION, Const.ERROR_WARN_MESSAGE_ICON_X, 'AXS Firmware Mismatch'];
Const.ERROR_WARN_MESSAGE_LENSIF_ERR                 = [Const.MESSAGE_WARNING_LENS_IF_ERROR,              Const.ERROR_WARN_MESSAGE_ICON_I, 'Lens I/F Error'];

Const.ERROR_WARN_MESSAGE_NON         = [0, Const.ERROR_WARN_MESSAGE_ICON_NON, '']; // Stopper

/*!
 * @brief Information Camera Conditionページ用メッセージ
 */
Const.INFORMATION_ERROR_WARN_MESSAGE_LINE_1 = 1;
Const.INFORMATION_ERROR_WARN_MESSAGE_LINE_2 = 2;
Const.INFORMATION_ERROR_WARN_MESSAGE_EXTIF_ERR                          = [Const.MESSAGE_WARNING_EXTIF_ERR                         , 'EXT. I/F Signal Error'            , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_MEDIA_FULL                         = [Const.MESSAGE_WARNING_REC_MEDIA_FULL                    , 'Media Full'                       , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_BATTERY_END                        = [Const.MESSAGE_WARNING_BATTERY_END                       , 'Battery End'                      , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_INSUFFICIENT_VOLTAGE               = [Const.MESSAGE_WARNING_INSUFFICIENT_VOLTAGE              , 'Insufficient Voltage'             , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_RR_DETECT_UNUSABLE_VERSION         = [Const.MESSAGE_WARNING_RR_DETECT_UNUSABLE_VERSION        , 'Cannot use AXS recorder because'  , 'AXS firmware does not match.'];
Const.INFORMATION_ERROR_WARN_MESSAGE_LENSIF_ERR                         = [Const.MESSAGE_WARNING_LENS_IF_ERROR                     , 'Lens I/F Error'                   , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_BACKUP_BATT_END                    = [Const.MESSAGE_WARNING_BACKUP_BATT_END                   , 'Backup Battery End'               , 'Please Change'];
Const.INFORMATION_ERROR_WARN_MESSAGE_MAIN_BOARD_TEMP_HIGH               = [Const.MESSAGE_WARNING_MAIN_BOARD_TEMP_HIGH              , 'Temperature High'                 , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_RR_ALERT_TEMP_HIGH                 = [Const.MESSAGE_WARNING_RR_ALERT_TEMP_HIGH                , 'AXS Recorder Temp. High'          , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_FAN_STOPPED                        = [Const.MESSAGE_WARNING_FAN_STOPPED                       , 'Fan Stopped'                      , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_EXT_FAN_STOPPED                    = [Const.MESSAGE_WARNING_EXT_FAN_STOPPED                   , 'AXS Recorder Fan Stopped'         , ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_AES_EBU_EMPHASIS                   = [Const.MESSAGE_WARNING_AES_EBU_EMPHASIS                  , 'Input AES/EBU is Invalid Emphasis', ''];
Const.INFORMATION_ERROR_WARN_MESSAGE_AES_EBU_NOT_PRO_USE                = [Const.MESSAGE_WARNING_AES_EBU_NOT_PRO_USE               , 'Input AES/EBU is not Pro Use'     , ''];

/*!
 * @brief 本体画面情報ID定義
 * @note ModeDataValueDefine.hppと同期させること.
 */

// CamDispGroupID
Const.CAM_DISPID_PLAY               = 0x0000,

//CamDispID
Const.CAM_DISPID_PLAY_CLIPLIST      = (Const.CAM_DISPID_PLAY  << 16) | 0x0001;
Const.CAM_DISPID_PLAY_PLAYSTAT      = (Const.CAM_DISPID_PLAY  << 16) | 0x0002;


/*!
 * @brief FullMenu FW 関連
 */
Const.FULLMENU_WIDTH		= 1004;
Const.FULLMENU_HEIGHT		=  560;

Const.PULLDOWN_WIDTH		=  304;
Const.PROGRESS_WIDTH		=  304;

Const.PULLDOWN_ATTR_ITEM_NAME				=  0;
Const.PULLDOWN_ATTR_ITEM_VALUE				=  1;
Const.PULLDOWN_ATTR_ITEM_ENABLED			=  2;
Const.PULLDOWN_ATTR_ITEM_SELECTABLE			=  3;
Const.PULLDOWN_ATTR_ITEM_VISBLE				=  4;
Const.PULLDOWN_ATTR_ITEM_SHORT_NAME			=  5;
Const.PULLDOWN_ATTR_ITEM_FEATURE_ID			=  6;
Const.PULLDOWN_ATTR_ITEM_ISREALTIMESET		=  7;
Const.PULLDOWN_ATTR_ITEM_QUICK_POS_X		=  8;
Const.PULLDOWN_ATTR_ITEM_QUICK_POS_Y		=  9;
Const.PULLDOWN_ATTR_ITEM_QUICK_WIDTH		= 10;
Const.PULLDOWN_ATTR_ITEM_NAME_EN			= 11;
Const.PULLDOWN_ATTR_ITEM_QUICK_NAME_EN		= 12;

Const.PROGRESSBAR_ATTR_IS_HIGHSPEED				=  0;
Const.PROGRESSBAR_ATTR_IS_CONVERT_TYPE			=  1;
Const.PROGRESSBAR_ATTR_IS_PROGRESSBAR_SHOW		=  2;
Const.PROGRESSBAR_ATTR_IS_MID_VALUE_SHOW		=  3;
Const.PROGRESSBAR_ATTR_IS_VALUE_WITH_SIGN		=  4;
Const.PROGRESSBAR_ATTR_IS_MIN_WITH_SIGN			=  5;
Const.PROGRESSBAR_ATTR_IS_MID_WITH_SIGN			=  6;
Const.PROGRESSBAR_ATTR_IS_MAX_WITH_SIGN			=  7;
Const.PROGRESSBAR_ATTR_MIN_VALUE				=  8;
Const.PROGRESSBAR_ATTR_MID_VALUE				=  9;
Const.PROGRESSBAR_ATTR_MAX_VALUE				= 10;
Const.PROGRESSBAR_ATTR_MAXAREA					= 11;
Const.PROGRESSBAR_ATTR_MINAREA					= 12;
Const.PROGRESSBAR_ATTR_DECIAMALDIGIT_VALUE		= 13;
Const.PROGRESSBAR_ATTR_DECIAMALDIGIT_MIN		= 14;
Const.PROGRESSBAR_ATTR_DECIAMALDIGIT_MID		= 15;
Const.PROGRESSBAR_ATTR_DECIAMALDIGIT_MAX		= 16;
Const.PROGRESSBAR_ATTR_VALUE_UNIT				= 17;
Const.PROGRESSBAR_ATTR_MIN_VALUE_UNIT			= 18;
Const.PROGRESSBAR_ATTR_MID_VALUE_UNIT			= 19;
Const.PROGRESSBAR_ATTR_MAX_VALUE_UNIT			= 20;
Const.PROGRESSBAR_ATTR_STEP_DIGIT				= 21;
Const.PROGRESSBAR_ATTR_INIT_VALUE				= 22;
Const.PROGRESSBAR_API_MAX_VALUE					= 23;
Const.PROGRESSBAR_API_MIN_VALUE					= 24;

Const.STATUS_ISENABLED					=  0;	// byte0 bit0  (0)
Const.STATUS_ISSELECTABLE				=  1;	// byte0 bit1  (1)
Const.STATUS_ISVISIABLE					=  2;	// byte0 bit2  (2)
Const.STATUS_ISENABLE_FOR_WIFI			=  3;	// byte0 bit3  (3)
Const.STATUS_ISREALTIMESET				=  4;	// byte0 bit4  (4)
Const.STATUS_ISONMENU					=  5;	// byte0 bit5  (5)
Const.STATUS_ISHIGHSPEED				=  6;	// byte0 bit6  (6)
Const.STATUS_ISPRESETANDCLEAR			=  7;	// byte0 bit7  (7)
Const.STATUS_ISUSERMENU					=  8;	// byte1 bit0  (8)
Const.STATUS_ISUSERMENUSELECTABLE		=  9;	// byte1 bit1  (9)
Const.STATUS_ISUSERFILE					= 16;	// byte2 bit0 (16)
Const.STATUS_ISSENCEFILE				= 17;	// byte2 bit1 (17)
Const.STATUS_ISALLFILE					= 18;	// byte2 bit2 (18)
Const.STATUS_ISPRESETFILE				= 19;	// byte2 bit3 (19)
Const.STATUS_ISREFERENCEFILE			= 20;	// byte2 bit4 (20)
Const.STATUS_ISLENSFILE					= 21;	// byte2 bit5 (21)
Const.STATUS_ISREFERENCEFILEDEFAULT		= 22;	// byte2 bit6 (22)
Const.STATUS_ISALLRESET					= 23;	// byte2 bit7 (23)
Const.STATUS_ISFACTORYRESET				= 24;	// byte3 bit0 (24)
Const.STATUS_ISSAVELOAD_BACKUPFILE		= 25;	// byte3 bit1 (25)
Const.STATUS_ISPROTOCOLFILE				= 26;	// byte3 bit2 (26)
Const.STATUS_IS_MENU_FOR_WIFI_DISABLE	= 27;	// byte3 bit3 (27)
Const.STATUS_ISCANCEL					= 28;	// byte3 bit4 (28)

Const.ITEM_TYPE_BASE										=  0;
Const.ITEM_TYPE_L1											=  1;
Const.ITEM_TYPE_L2											=  2;
Const.ITEM_TYPE_L3											=  3;
Const.ITEM_TYPE_L3_PULLDOWN_ONMENU							=  4;
Const.ITEM_TYPE_L3_PULLDOWN_ONMONITOR						=  5;
Const.ITEM_TYPE_L3_PROGRESSBAR_ONMENU						=  6;
Const.ITEM_TYPE_L3_PROGRESSBAR_ONMONITOR					=  7;
Const.ITEM_TYPE_L3_PROGRESSBAR_ONMENU_RELATIVE				=  8;
Const.ITEM_TYPE_L3_PROGRESSBAR_ONMONITOR_LOOP				=  9;
Const.ITEM_TYPE_L3_PROGRESSBAR_ONMONITOR_NON_LINERA			= 10;
Const.ITEM_TYPE_L3_PROGRESSBAR_ONMONITOR_DISCRETE			= 11;
Const.ITEM_TYPE_L3_OUTPUT_FORMAT_ONMONITOR					= 12;
Const.ITEM_TYPE_L3_DATA_SETTING								= 13;
Const.ITEM_TYPE_L3_DATESETTING								= 14;
Const.ITEM_TYPE_L3_PULLDOWN_ONMENU_EXECUTE					= 15;
Const.ITEM_TYPE_L3_UNSELECTABLE								= 16;
Const.ITEM_TYPE_L4_FILE										= 17;
Const.ITEM_TYPE_PROGRESSBARUNVISIBLE						= 18;
Const.ITEM_TYPE_UNENABLE									= 19;
Const.ITEM_TYPE_UNVISIBLE									= 20;
Const.ITEM_TYPE_L3_FILE										= 21;
Const.ITEM_TYPE_L3_EXECUTE									= 22;
Const.ITEM_TYPE_KEYBOARD									= 23;
Const.ITEM_TYPE_L4_EXEUCTE_SOFTKEY							= 24;
Const.ITEM_TYPE_L4_PULLDOWN_ONMENU_SOFTKEY					= 25;
Const.ITEM_TYPE_ROGRESSBARUNENABLE							= 26;
Const.ITEM_TYPE_UNENABLEANDUNSELECTABLE						= 27;
Const.ITEM_TYPE_L4_PULLDOWN_ONMENU							= 28;
Const.ITEM_TYPE_L4											= 29;
Const.ITEM_TYPE_ROGRESSBAR_UNSELECTABLE						= 30;
Const.ITEM_TYPE_L4_PLANNINGMETALOAD							= 31;
Const.ITEM_TYPE_L3_SCENE_FILE_RECALLED						= 32;

Const.L1_ATTR_LVL1_NORMAL			= 0;
Const.L1_ATTR_LVL1_CURSOR			= 1;
Const.L1_ATTR_LVL1_CURSOR_DISABLE	= 2;
Const.L1_ATTR_LVL2_SELECTED			= 3;
Const.L1_ATTR_LVL2_UNSELECTED		= 4;
Const.L1_ATTR_LVL3					= 5;

Const.EXECUTE_ONMENU_ATTR_EXE_NAME		=  0;
Const.EXECUTE_ONMENU_ATTR_CANCEL_NAME	=  1;
Const.EXECUTE_ONMENU_WAIT_MESSAGEID		=  2;
Const.EXECUTE_ONMENU_WAIT_LINE_ONE		=  3;
Const.EXECUTE_ONMENU_WAIT_LINE_TWO		=  4;
Const.EXECUTE_ONMENU_WAIT_LINE_THREE	=  5;
Const.EXECUTE_ONMENU_WAIT_LINE_FOUR		=  6;
Const.EXECUTE_ONMENU_RUN_MESSAGEID		=  7;
Const.EXECUTE_ONMENU_RUN_LINE_ONE		=  8;
Const.EXECUTE_ONMENU_RUN_LINE_TWO		=  9;
Const.EXECUTE_ONMENU_RUN_LINE_THREE		= 10;
Const.EXECUTE_ONMENU_RUN_LINE_FOUR		= 11;
Const.EXECUTE_ONMENU_RUN_CANCEL			= 12;
Const.EXECUTE_ONMENU_RUN_CANCEL_PRST	= 13;

Const.EXECUTE_ONMENU_ATTR_EXE_NAME			=  0;
Const.EXECUTE_ONMENU_ATTR_CANCEL_NAME		=  1;
Const.EXECUTE_ONMENU_WAIT_MESSAGEID			=  2;
Const.EXECUTE_ONMENU_WAIT_LINE_ONE			=  3;
Const.EXECUTE_ONMENU_WAIT_LINE_TWO			=  4;
Const.EXECUTE_ONMENU_WAIT_LINE_THREE		=  5;
Const.EXECUTE_ONMENU_WAIT_LINE_FOUR			=  6;
Const.EXECUTE_ONMENU_RUN_MESSAGEID			=  7;
Const.EXECUTE_ONMENU_RUN_LINE_ONE			=  8;
Const.EXECUTE_ONMENU_RUN_LINE_TWO			=  9;
Const.EXECUTE_ONMENU_RUN_LINE_THREE			= 10;
Const.EXECUTE_ONMENU_RUN_LINE_FOUR			= 11;
Const.EXECUTE_ONMENU_RUN_CANCEL				= 12;
Const.EXECUTE_ONMENU_RUN_CANCEL_PRST		= 13;
Const.EXECUTE_ONMENU_ATTR_QUICK_POS_X		= 14;
Const.EXECUTE_ONMENU_ATTR_QUICK_POS_Y		= 15;
Const.EXECUTE_ONMENU_ATTR_QUICK_WIDTH		= 16;
Const.EXECUTE_ONMENU_ATTR_EXE_NAME_EN		= 17;
Const.EXECUTE_ONMENU_ATTR_CANCEL_NAME_EN	= 18;

/*!
 * @brief OSD Appearance 関連
 */
// OSD Appearance 右リスト
Const.OSD_APPEARANCE_RIGHT_MENU_INDEX_ITEMID	= 0;
Const.OSD_APPEARANCE_RIGHT_MENU_INDEX_SHORTNAME	= 1;
												/* itemID,				 shortName */
Const.OSD_APPEARANCE_RIGHT_MENU_VF				= ['L3_VF_TITLE',		 'VF OSD'];
Const.OSD_APPEARANCE_RIGHT_MENU_SDI				= ['L3_SDI_TITLE',		 'SDI OSD'];
Const.OSD_APPEARANCE_RIGHT_MENU_MONITOR			= ['L3_MONITOR_TITLE',	 'Monitor OSD'];
Const.OSD_APPEARANCE_RIGHT_MENU_HDMI			= ['L3_HDMI_OSD',		 'HDMI OSD'];
Const.OSD_APPEARANCE_RIGHT_STATUS_AB_INFO		= ['L3_STATUS_AB_INFO',	 'StatusInfo A/B Set'];
Const.OSD_APPEARANCE_RIGHT_FRAME_AB_LINE		= ['L3_FRAME_AB_LINE', 	 'FrameLine A/B Set'];
Const.OSD_APPEARANCE_RIGHT_STOPPER				= ['',					 ''];
Const.OSD_APPEARANCE_RIGHT_MENU_MAX				= 5;

Const.OSD_APPEARANCE_ITEMID						= 'L2_OSD_APPEARANCE';

// OSD Appearance 画面
Const.OSD_APPEARANCE_CHILD_NODE_VF_TITLE						= 0;
Const.OSD_APPEARANCE_CHILD_NODE_SDI_TITLE						= 1;
Const.OSD_APPEARANCE_CHILD_NODE_MONITOR_TITLE					= 2;
Const.OSD_APPEARANCE_CHILD_NODE_HDMI_OSD						= 3;
Const.OSD_APPEARANCE_CHILD_NODE_STATUS_INFO_AB_SETUP			= 4;
Const.OSD_APPEARANCE_CHILD_NODE_FRAME_LINE_AB_SETUP				= 5;
Const.OSD_APPEARANCE_CHILD_NODE_VF_OSD_CHECK_BOX				= 6;
Const.OSD_APPEARANCE_CHILD_NODE_VF_OSD							= 7;
Const.OSD_APPEARANCE_CHILD_NODE_VF_FRAME_LINE_CHECK_BOX			= 8;
Const.OSD_APPEARANCE_CHILD_NODE_VF_FRAME_LINE					= 9;
Const.OSD_APPEARANCE_CHILD_NODE_VF_MENU							= 10;
Const.OSD_APPEARANCE_CHILD_NODE_VF_MSG							= 11;
Const.OSD_APPEARANCE_CHILD_NODE_SDI_OSD_CHECK_BOX				= 12;
Const.OSD_APPEARANCE_CHILD_NODE_SDI_OSD							= 13;
Const.OSD_APPEARANCE_CHILD_NODE_SDI_FRAME_LINE_CHECK_BOX		= 14;
Const.OSD_APPEARANCE_CHILD_NODE_SDI_FRAME_LINE					= 15;
Const.OSD_APPEARANCE_CHILD_NODE_SDI_MENU						= 16;
Const.OSD_APPEARANCE_CHILD_NODE_SDI_MSG							= 17;
Const.OSD_APPEARANCE_CHILD_NODE_MONITOR_OSD_CHECK_BOX			= 18;
Const.OSD_APPEARANCE_CHILD_NODE_MONITOR_OSD						= 19;
Const.OSD_APPEARANCE_CHILD_NODE_MONITOR_FRAME_LINE_CHECK_BOX	= 20;
Const.OSD_APPEARANCE_CHILD_NODE_MONITOR_FRAME_LINE				= 21;
Const.OSD_APPEARANCE_CHILD_NODE_MONITOR_MENU					= 22;
Const.OSD_APPEARANCE_CHILD_NODE_MONITOR_MSG						= 23;
Const.OSD_APPEARANCE_CHILD_NODE_MAX								= 24;

// CheckBoxValue
Const.MENU_CHECKBOX_OFF		= 0;
Const.MENU_CHECKBOX_ON		= 1;
Const.MENU_CHECKBOX_DISPOFF	= 0xFF;

// SelectValue
Const.MENU_SELECT_NONE_VALUE	= 0xFFFFFFFF;

// OutputSDI1SizeValue, OutputHdmiSize
Const.MENU_OUTPUT_4096X2160P_SQ_LEVEL_B			= 0;
Const.MENU_OUTPUT_4096X2160P_2SI_LEVEL_B		= 1;
Const.MENU_OUTPUT_4096X2160P_SQUARE				= 2;
Const.MENU_OUTPUT_3840X2160P_SQ_LEVEL_B			= 3;
Const.MENU_OUTPUT_3840X2160P_2SI_LEVEL_B		= 4;
Const.MENU_OUTPUT_3840X2160P_SQUARE				= 5;
Const.MENU_OUTPUT_2048X1080P_LEVEL_B			= 6;
Const.MENU_OUTPUT_2048X1080P					= 7;
Const.MENU_OUTPUT_2048X1080PSF					= 8;
Const.MENU_OUTPUT_1920X1080P_LEVEL_B			= 9;
Const.MENU_OUTPUT_1920X1080P					= 10;
Const.MENU_OUTPUT_1920X1080PSF					= 11;
Const.MENU_OUTPUT_1920X1080I					= 12;
Const.MENU_OUTPUT_720x486						= 13;
Const.MENU_OUTPUT_720x576						= 14;
Const.MENU_OUTPUT_4096X2160P_12G_2SI_LEVEL_A	= 15;
Const.MENU_OUTPUT_4096X2160P_6G_2SI_LEVEL_B		= 16;
Const.MENU_OUTPUT_3840X2160P_12G_2SI_LEVEL_A	= 17;
Const.MENU_OUTPUT_3840X2160P_6G_2SI_LEVEL_B		= 18;
Const.MENU_OUTPUT_NO_SET						= 19;
Const.MENU_OUTPUT_1920X1080P_LEVEL_A			= 20;
Const.MENU_OUTPUT_1920X1080P_RGB_LEVEL_B		= 21;
Const.MENU_OUTPUT_4096X2160P_SQ_LEVEL_A			= 22;
Const.MENU_OUTPUT_4096X2160P_2SI_LEVEL_A		= 23;
Const.MENU_OUTPUT_3840X2160P_SQ_LEVEL_A			= 24;
Const.MENU_OUTPUT_3840X2160P_2SI_LEVEL_A		= 25;
Const.MENU_OUTPUT_2048X1080P_LEVEL_A			= 26;

// Status Info A/B Setup画面/Frame Line A/B Setup画面 共通
Const.OSD_APPEARANCE_SETUP_SCROLL_TOP			= 131;
Const.OSD_APPEARANCE_SETUP_SCROLL_MAX_INDEX		= 8;
Const.OSD_APPEARANCE_SETUP_SCROLL_MAX_HEIGHT	= 384;
Const.OSD_APPEARANCE_SETUP_SCROLL_LIST_HEIGHT	= 48;
Const.OSD_APPEARANCE_SETUP_SCROLL_BG_BOTTOM		= 540;
Const.OSD_APPEARANCE_SETUP_DIALOG_BG_HIGHT		= 588;

Const.INFO_LINE_AB_SETUP_OPTION_VALUE_HYPHEN	= '-';
Const.INFO_LINE_AB_SETUP_OPTION_NONE_VALUE		= 0xFFFFFFFF;
Const.INFO_LINE_AB_SETUP_VF_OSD_STRING			= 'VF';
Const.INFO_LINE_AB_SETUP_SDI_OSD_STRING			= 'SDI';
Const.INFO_LINE_AB_SETUP_SDI_1_2_OSD_STRING		= 'SDI 1/2';
Const.INFO_LINE_AB_SETUP_SDI_3_4_OSD_STRING		= 'SDI 3/4';
Const.INFO_LINE_AB_SETUP_MONITOR_OSD_STRING		= 'Moni.';
Const.INFO_LINE_AB_SETUP_HDMI_OSD_STRING		= 'HDMI';

//Status Info A/B Setup画面
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_PROJECT						= 0;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC							= 1;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_AUDIO_LEVEL_METER				= 2;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LOOK_STATUS					= 3;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_OUTPUT_LUT					= 4;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_RECORDING_LUT					= 5;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_VF_STATUS						= 6;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LENS_STATUS					= 7;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_REMOTE_CONTROL_STATUS 		= 8;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LEVEL_GAUGE 					= 9;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_ROLL_TILT_VALUE				= 10;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC_GENLOCK_STATUS				= 11;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_PROJECT_CHECK_BOX_A			= 12;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_PROJECT_CHECK_BOX_B			= 13;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_PROJECT_OPTION				= 14;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC_CHECK_BOX_A				= 15;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC_CHECK_BOX_B				= 16;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC_OPTION						= 17;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_AUDIO_LEVEL_METER_CHECK_BOX_A	= 18;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_AUDIO_LEVEL_METER_CHECK_BOX_B	= 19;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_AUDIO_LEVEL_METER_OPTION		= 20;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LOOK_STATUS_CHECK_BOX_A		= 21;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LOOK_STATUS_CHECK_BOX_B		= 22;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LOOK_STATUS_OPTION			= 23;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_OUTPUT_LUT_CHECK_BOX_A		= 24;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_OUTPUT_LUT_CHECK_BOX_B		= 25;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_OUTPUT_LUT_OPTION				= 26;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_RECORDING_LUT_CHECK_BOX_A		= 27;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_RECORDING_LUT_CHECK_BOX_B		= 28;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_RECORDING_OPTION				= 29;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_VF_STATUS_CHECK_BOX_A			= 30;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_VF_STATUS_CHECK_BOX_B			= 31;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_VF_STATUS_OPTION				= 32;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LENS_STATUS_CHECK_BOX_A		= 33;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LENS_STATUS_CHECK_BOX_B		= 34;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LENS_STATUS_OPTION			= 35;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_REMOTE_CONTROL_CHECK_BOX_A	= 36;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_REMOTE_CONTROL_CHECK_BOX_B	= 37;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_REMOTE_CONTROL_OPTION			= 38;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LEVEL_GAUGE_CHECK_BOX_A 		= 39;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LEVEL_GAUGE_CHECK_BOX_B		= 40;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_LEVEL_GAUGE_OPTION			= 41;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_ROLL_TILT_VALUE_CHECK_BOX_A	= 42;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_ROLL_TILT_VALUE_CHECK_BOX_B	= 43;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_ROLL_TILT_VALUE_OPTION		= 44;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC_GENLOCK_STATUS_CHECK_BOX_A	= 45;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC_GENLOCK_STATUS_CHECK_BOX_B	= 46;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_TC_GENLOCK_STATUS_OPTION		= 47;
Const.STATUS_INFO_AB_SETUP_CHILD_NODE_MAX							= 48;

Const.STATUS_INFO_AB_SETUP_INFO_NAME_LIST_ID		= '_ITEM_LIST_PULLDOWN_STATUS_INFO_AB_SETUP_DLG_ITEMS';
Const.STATUS_INFO_AB_SETUP_INFO_A_CHECKBOX_LIST_ID	= 'STATUS_INFO_A_CHKBOX_';
Const.STATUS_INFO_AB_SETUP_INFO_B_CHECKBOX_LIST_ID	= 'STATUS_INFO_B_CHKBOX_';
Const.STATUS_INFO_AB_SETUP_OPTION_MARK_LIST_ID		= 'STATUS_INFO_OPT_MARK_';
Const.STATUS_INFO_AB_SETUP_OPTION_LIST_ID			= 'STATUS_INFO_OPT_VALU_';
Const.STATUS_INFO_AB_SETUP_LIST_ID_CHARA_LEN_MAX	= 21;

Const.STATUS_INFO_AB_SETUP_INFO_A_CHECKBOX	= 0;
Const.STATUS_INFO_AB_SETUP_INFO_B_CHECKBOX	= 1;
Const.STATUS_INFO_AB_SETUP_OPTION			= 2;
															/* Info.A CheckBox,									Info.B CheckBox,								Option */
Const.STATUS_INFO_AB_SETUP_DATAMODEL_PROJECT				= ['DISPLAY_INFO_A_PROJECT_ONOFF',					'DISPLAY_INFO_B_PROJECT_ONOFF',					''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_TIMECODE				= ['DISPLAY_INFO_A_TIMECODE_ONOFF',					'DISPLAY_INFO_B_TIMECODE_ONOFF',				''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_AUDIO_LEVEL_METER		= ['DISPLAY_INFO_A_AUDIO_LEVEL_METER_ONOFF',		'DISPLAY_INFO_B_AUDIO_LEVEL_METER_ONOFF',		''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_LOOK_STATUS			= ['DISPLAY_INFO_A_LOOK_STATUS_ONOFF',				'DISPLAY_INFO_B_LOOK_STATUS_ONOFF',				''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_OUTPUT_LUT				= ['DISPLAY_INFO_A_OUTPUT_LOOK_ONOFF',				'DISPLAY_INFO_B_OUTPUT_LOOK_ONOFF',				''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_RECORDING_LUT			= ['DISPLAY_INFO_A_RECORDING_LOOK_ONOFF',			'DISPLAY_INFO_B_RECORDING_LOOK_ONOFF',			''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_VF_STATUS				= ['DISPLAY_INFO_A_VF_STATUS_ONOFF',				'DISPLAY_INFO_B_VF_STATUS_ONOFF',				''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_LENS_STATUS			= ['DISPLAY_INFO_A_LENS_ONOFF',						'DISPLAY_INFO_B_LENS_ONOFF',					'CAM_DISP_FOCUSPOSITION'];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_REMOTE_CONTROL_STATUS	= ['DISPLAY_INFO_A_REMOTE_CONTROL_STATUS_ONOFF',	'DISPLAY_INFO_B_REMOTE_CONTROL_STATUS_ONOFF',	''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_LEVEL_GAUGE			= ['DISPLAY_INFO_A_LEVEL_GAUGE_ONOFF',				'DISPLAY_INFO_B_LEVEL_GAUGE_ONOFF',				''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_ROLL_TILT_VALUE		= ['DISPLAY_INFO_A_ROLL_TILT_VALUE_ONOFF',			'DISPLAY_INFO_B_ROLL_TILT_VALUE_ONOFF',			''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_TC_GENLOCK_STATUS		= ['DISPLAY_INFO_A_TC_GENLOCK_STATUS_ONOFF',		'DISPLAY_INFO_B_TC_GENLOCK_STATUS_ONOFF',		''];
Const.STATUS_INFO_AB_SETUP_DATAMODEL_NONE					= ['',												'',												''];

															/* Info A CheckBox,							Info B CheckBox,						Option */
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_PROJECT				= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_TIMECODE				= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_AUDIO_LEVEL_METER	= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_LOOK_STATUS			= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_OUTPUT_LUT			= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_RECORDING_LUT		= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_VF_STATUS			= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_LENS_STATUS			= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_REMOTE_CONTROL_STATUS= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_LEVEL_GAUGE			= ['INH_LEVEL_GAUGE_OSD_APPEARANCE',		'INH_LEVEL_GAUGE_OSD_APPEARANCE',		''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_ROLL_TILT_VALUE		= ['INH_ROLL_TILT_VALUE_OSD_APPEARANCE',	'INH_ROLL_TILT_VALUE_OSD_APPEARANCE',	''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_TC_GENLOCK_STATUS	= ['',										'',										''];
Const.STATUS_INFO_AB_SETUP_INH_FEATURE_NONE					= ['',										'',										''];

Const.STATUS_INFO_AB_SETUP_DATA_MAX		= 12;

Const.MENU_STATUS_INFO_SELECT_INFO_A	= 0;
Const.MENU_STATUS_INFO_SELECT_INFO_B	= 1;

// Frame Line A/B Setup画面
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_CENTER_MARKER					= 0;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO					= 1;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_SAFETY_ZONE				= 2;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_PICTURE_AREA					= 3;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SAFETY_ZONE					= 4;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE				= 5;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE2				= 6;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_COLOR							= 7;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SURROUND_VIEW_TYPE				= 8;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO_TYPE				= 9;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_MASK_LEVEL						= 10;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_FRAME_LINE_ON_PB				= 11;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_CENTER_MARKER_CHECK_BOX_A		= 12;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_CENTER_MARKER_CHECK_BOX_B		= 13;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_CENTER_MARKER_OPTION			= 14;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO_CHECK_BOX_A		= 15;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO_CHECK_BOX_B		= 16;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO_OPTION			= 17;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_SAFETY_ZONE_CHECK_BOX_A	= 18;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_SAFETY_ZONE_CHECK_BOX_B	= 19;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_SAFETY_ZONE_OPTION		= 20;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_PICTURE_AREA_CHECK_BOX_A		= 21;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_PICTURE_AREA_CHECK_BOX_B		= 22;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_PICTURE_AREA_OPTION			= 23;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SAFETY_ZONE_CHECK_BOX_A		= 24;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SAFETY_ZONE_CHECK_BOX_B		= 25;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SAFETY_ZONE_OPTION				= 26;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE_CHECK_BOX_A	= 27;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE_CHECK_BOX_B	= 28;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE_OPTION			= 29;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE_2_CHECK_BOX_A	= 30;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE_2_CHECK_BOX_B	= 31;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_USER_FRAME_LINE_2_OPTION		= 32;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_COLOR_CHECK_BOX_A				= 33;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_COLOR_CHECK_BOX_B				= 34;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_COLOR_OPTION					= 35;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SURROUND_VIEW_TYPE_CHECK_BOX_A	= 36;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SURROUND_VIEW_TYPE_CHECK_BOX_B	= 37;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_SURROUND_VIEW_TYPE_OPTION		= 38;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO_TYPE_CHECK_BOX_A	= 39;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO_TYPE_CHECK_BOX_B	= 40;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_ASPECT_RATIO_TYPE_OPTION		= 41;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_MASK_LEVEL_CHECK_BOX_A			= 42;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_MASK_LEVEL_CHECK_BOX_B			= 43;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_MASK_LEVEL_OPTION				= 44;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_FRAME_LINE_ON_PB_CHECK_BOX_A	= 45;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_FRAME_LINE_ON_PB_CHECK_BOX_B	= 46;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_FRAME_LINE_ON_PB_OPTION		= 47;
Const.FRAME_LINE_AB_SETUP_CHILD_NODE_MAX							= 48;

Const.FRAME_LINE_AB_SETUP_LINE_A_CHECKBOX_LIST_ID	= 'FRAME_LINE_A_CHKBOX_';
Const.FRAME_LINE_AB_SETUP_LINE_B_CHECKBOX_LIST_ID	= 'FRAME_LINE_B_CHKBOX_';
Const.FRAME_LINE_AB_SETUP_OPTION_MARK_LIST_ID		= 'FRAME_LINE_OPT_MARK_';
Const.FRAME_LINE_AB_SETUP_OPTION_LIST_ID			= 'FRAME_LINE_OPT_VALU_';
Const.FRAME_LINE_AB_SETUP_LIST_ID_CHARA_LEN_MAX		= 20;

Const.FRAME_LINE_AB_SETUP_LINE_A_CHECKBOX	= 0;
Const.FRAME_LINE_AB_SETUP_LINE_B_CHECKBOX	= 1;
Const.FRAME_LINE_AB_SETUP_OPTION			= 2;
															/* Line A CheckBox,							Line B CheckBox,						Option */
Const.FRAME_LINE_AB_SETUP_DATAMODEL_CENTER_MARKER			= ['MARKER_A_CENTER_ONOFF',					'MARKER_B_CENTER_ONOFF',				'CENTER_MARKER'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_ASPECT_RATIO			= ['MARKER_A_ASPECT_ONOFF',					'MARKER_B_ASPECT_ONOFF',				'ASPECT_SELECT'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_ASPECT_SAFETY_ZONE		= ['MARKER_A_ASPECT_SAFETY_ZONE_ONOFF',		'MARKER_B_ASPECT_SAFETY_ZONE_ONOFF',	'ASPECT_SAFETY_AREA'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_PICTURE_AREA			= ['MARKER_A_100_ONOFF',					'MARKER_B_100_ONOFF',					''];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_SAFETY_ZONE				= ['MARKER_A_SAFETY_ZONE_ONOFF',			'MARKER_B_SAFETY_ZONE_ONOFF',			'SAFETY_AREA'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_USER_FRAME_LINE			= ['MARKER_A_USER_BOX_ONOFF',				'MARKER_B_USER_BOX_ONOFF',				'USER_BOX_SELECT'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_USER_FRAME_LINE2		= ['MARKER_A_USER_BOX_2_ONOFF',				'MARKER_B_USER_BOX_2_ONOFF',			'USER_BOX_2_SELECT'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_COLOR					= ['',										'',										'COLOR'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_SURROUND_VIEW_TYPE		= ['',										'',										'SURROUND_VIEW_TYPE'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_ASPECT_RATIO_TYPE		= ['',										'',										'ASPECT_MARKER'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_MASK_LEVEL				= ['',										'',										'ASPECT_MASK'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_FRAME_LINE_ON_PB		= ['',										'',										'MARKER_ON_PLAYBACK_ONOFF'];
Const.FRAME_LINE_AB_SETUP_DATAMODEL_NONE					= ['',										'',										''];

															/* Line A CheckBox,							Line B CheckBox,						Option */
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_CENTER_MARKER			= ['',										'',										'INH_MARKER_CENTER_MARKER'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_ASPECT_RATIO			= ['',										'',										'INH_MARKER_ASPECT_SELECT'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_ASPECT_SAFETY_ZONE	= ['',										'',										'INH_MARKER_ASPECT_SAFETY_AREA'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_SAFETY_ZONE			= ['',										'',										'INH_MARKER_SAFETY_AREA'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_COLOR					= ['',										'',										'INH_MARKER_COLOR'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_SURROUND_VIEW_TYPE	= ['',										'',										'INH_SURROUND_VIEW_TYPE_FOR_MENU'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_ASPECT_RATIO_TYPE		= ['',										'',										'INH_MARKER_ASPECT_MARKER'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_MASK_LEVEL			= ['',										'',										'INH_MARKER_ASPECT_MASK'];
Const.FRAME_LINE_AB_SETUP_INH_FEATURE_NONE					= ['',										'',										''];

Const.FRAME_LINE_AB_SETUP_TITLE_LABEL_WIDGET				= 'LABEL_FRAME_LINE_AB_SETUP_FRAME_LINE_SETTING_TITLE_LINE';
Const.FRAME_LINE_AB_SETUP_LINE_A_CHECKBOX_IMAGE_WIDGET		= 'IMAGE_PULLDOWN_FRAME_LINE_AB_SETUP_FRAME_LINE_SETTING_A_CHECKBOX_LINE';
Const.FRAME_LINE_AB_SETUP_LINE_B_CHECKBOX_IMAGE_WIDGET		= 'IMAGE_PULLDOWN_FRAME_LINE_AB_SETUP_FRAME_LINE_SETTING_B_CHECKBOX_LINE';
Const.FRAME_LINE_AB_SETUP_OPTION_VALUE_MARK_IMAGE_WIDGET	= 'IMAGE_PULLDOWN_FRAME_LINE_AB_SETUP_FRAME_LINE_SETTING_VALUE_MARK_LINE';
Const.FRAME_LINE_AB_SETUP_OPTION_VALUE_LABEL_WIDGET			= 'LABEL_PULLDOWN_FRAME_LINE_AB_SETUP_FRAME_LINE_SETTING_VALUE_LINE';

Const.FRAME_LINE_AB_SETUP_DATA_MAX		= 12;

Const.MENU_FRAME_LINE_SELECT_LINE_A		= 0;
Const.MENU_FRAME_LINE_SELECT_LINE_B		= 1;


// DPro-App-UI_161H/src/AppImpl/Common/View/Page/PageCommon/PageCommonDefine.hpp
// enum TYPE_en
Const.TYPE_NO_CONVERT				=  1;
Const.TYPE_NORMAL					=  2;
Const.TYPE_DC_VOL					=  3;
Const.TYPE_WHITE_CLIP				=  4;
Const.TYPE_SHUTTER					=  5;
Const.TYPE_BLACK_GAMMA				=  6;
Const.TYPE_N8						=  7;
Const.TYPE_SPECIALSPECIAL			=  8;
Const.TYPE_STEP_GAMMA				=  9;
Const.TYPE_CCD_REGI					= 10;
Const.TYPE_BATTERY					= 11;
Const.TYPE_WHITE					= 12;
Const.TYPE_CCD_SUB					= 13;
Const.TYPE_ZOOM_SPEED				= 14;
Const.TYPE_WARM_COOL				= 15;
Const.TYPE_COLOR_TEMP				= 16;
Const.TYPE_R_B_GAIN					= 17;
Const.TYPE_V_MODULATION				= 18;
Const.TYPE_MASTER_BLACK				= 19;
Const.TYPE_GAMMA					= 20;
Const.TYPE_STEP_331					= 21;
Const.TYPE_VARIABLE_COLOR_TEMP		= 22;
Const.TYPE_SKIN_DETAIL_HUE			= 23;
Const.TYPE_SKIN_DETAIL_WIDTH		= 24;
Const.TYPE_KNEE_POINT				= 25;
Const.TYPE_AUTO_IRIS				= 26;
Const.TYPE_SDR_GAIN					= 29;

// View/ResIDDefine.hpp より移植(ここは STRID から手動で変換している)
Const.unitResIDInfo = {
	 0:'',		// UNIT_RESID_NAME_NONE
	 1:'V',		// UNIT_VOLT
	 2:'min',	// UNIT_MINUTE
	 3:'%',		// UNIT_PERSENT
	 4:'/',		// UNIT_SLASH
	 5:':',		// UNIT_COLON
	 6:'-',		// UNIT_HYPHEN
	 7:'dB',	// UNIT_DB
	 8:'ISO',	// UNIT_ISO
	 9:'K',		// UNIT_KELVIN
	10:'°C',	// UNIT_DEG_CELSIUS
	11:'H',		// UNIT_HOUR
	12:'m',		// UNIT_METER
	13:'ft',	// UNIT_FT
	14:'feet',	// UNIT_FEET
	15:'∞',	// UNIT_INFINITY
	16:'inch',	// UNIT_INCH
	17:'Ah',	// UNIT_AH
	18:'GB',	// UNIT_GB
	19:'P',		// UNIT_P
	20:'Hz',	// UNIT_HZ
	21:'ms',	// UNIT_MS
	22:'.',		// POINT
	23:'+',		// PLUS
	24:'-',		// MINUS
	25:'±',	// PLUS_MINUS
	26:'mW',	// UNIT_MW
};

// Shutter 関連
Const.SS_MODE_SPEED			= 0;
Const.SS_MODE_ANGLE			= 1;

Const.SS_SEL_STEP			= 0;
Const.SS_SEL_CONT			= 1;

// BasicSetting 関連
// DefRecFormat.h
// SXS Sub Rec Type
Const.SUB_REC_NONE	= 0;	//SUB記録無し(Rec Off)
Const.SUB_REC_PROXY	= 1;	//SUB記録有り(Proxy)
Const.SUB_REC_VALID	= 2;	//SUB記録有り

// SXS Sub Rec Format
Const.SXS_SUB_CODEC_MPEG_HD_P			= 0;	//SUB MPEG HD P
Const.SXS_SUB_CODEC_MPEG_HD_I			= 1;	//SUB MPEG HD i
Const.SXS_SUB_CODEC_PRORES_PROXY_HD 	= 2;	//SUB ProRes Proxy HD P
Const.SXS_SUB_CODEC_PRORES_PROXY_HD_I	= 3;	//SUB ProRes Proxy HD i

Const.SXS_SUB_RECFORMAT_OFF_VALUE				= 0;
Const.SXS_SUB_RECFORMAT_MPEG_P_VALUE			= 1;
Const.SXS_SUB_RECFORMAT_MPEG_I_VALUE			= 2;
Const.SXS_SUB_RECFORMAT_PRORES_PROXY_P_VALUE	= 3;
Const.SXS_SUB_RECFORMAT_PRORES_PROXY_I_VALUE	= 4;

// Audio 関連
Const.AUDIOMONITORCH1_CH2	= 0;
Const.AUDIOMONITORCH3_CH4	= 1;

// TC 関連
Const.DF_MODE_DF	= 0;
Const.DF_MODE_NDF	= 1;

Const.TIMECODE_MENU_PRESET_RRUN			= 1;	// Preset R-Run
Const.TIMECODE_MENU_PRESET_FRUN_EXTLK	= 2;	// Preset F-Run (Ext-Lk)
Const.TIMECODE_MENU_INT_REGEN			= 3;	// Int Regen

Const.TIMECODE_MODE_CLOCK	= 1;	// Clock モード
Const.TIMECODE_MODE_PRESET	= 2;	// Preset モード
Const.TIMECODE_MODE_REGEN	= 3;	// Regen モード

Const.TIMECODE_RUN_RECRUN	= 1;	// Rec Run モード
Const.TIMECODE_RUN_FREERUN	= 2;	// Free Run モード
Const.TIMECODE_RUN_SET		= 3;	// Set モード

Const.FREQUENCY_5994	= 1;
Const.FREQUENCY_50		= 2;
Const.FREQUENCY_2997	= 3;
Const.FREQUENCY_25		= 4;
Const.FREQUENCY_2398	= 5;
Const.FREQUENCY_24		= 6;
Const.FREQUENCY_4795	= 7;

// Technical 関連
// APR
Const.ERROR_ID_APR_RESULT_MIN                       = -2;
Const.ERROR_ID_APR_RESULT_MESSAGE_CLOSE             = -1;  /* メッセージのみ消去      */
Const.ERROR_ID_APR_RESULT_OK                        =  0;  /* APR成功                 */
Const.ERROR_ID_APR_RESULT_CANCELED                  =  1;  /* APRキャンセル           */
Const.ERROR_ID_APR_RESULT_IRIS_NOT_CLOSED           =  2;  /* IRISがCloseされていない */
Const.ERROR_ID_APR_RESULT_TIME_OUT                  =  3;  /* タイムアウト            */
Const.ERROR_ID_APR_RESULT_EXCEED_MAX_NUM_OF_REGSTER =  4;  /* 検出数が最大登録数越え  */
Const.ERROR_ID_APR_RESULT_MAX                       =  5;
// APR Reset
Const.ERROR_ID_APR_RESET_RESULT_MIN                   = -2;
Const.ERROR_ID_APR_RESET_RESULT_MESSAGE_CLOSE         = -1;  /* メッセージのみ消去      */
Const.ERROR_ID_APR_RESET_RESULT_OK                    =  0;  /* APR Reset成功           */
Const.ERROR_ID_APR_RESET_RESULT_NG                    =  1;  /* APR Reset失敗           */
Const.ERROR_ID_APR_RESET_RESULT_MAX                   =  2;

/*!
 * @brief Big6 LUT関連
 */
// EDITLOOK_SELECT画面表示内容判断用.
Const.EDITLOOK_SELECT_CATEGORY			= 0;
Const.EDITLOOK_SELECT_PRESET_LOOK		= 1;
Const.EDITLOOK_SELECT_USER_3D_LUT		= 2;
Const.EDITLOOK_SELECT_CDL_PROCESS		= 3;
Const.EDITLOOK_SELECT_CDL_SELECT		= 4;
Const.EDITLOOK_SELECT_ACES				= 5;
Const.EDITLOOK_SELECT_ART				= 6;

// LUT_SETTING画面表示内容判断用.
Const.SDI_1_2_LUT_SELECT			= 0;
Const.SDI_3_4_LUT_SELECT			= 1;
Const.MONITOR_LUT_SELECT			= 2;
Const.HDMI_LUT_SELECT				= 3;
Const.VF_LUT_SELECT					= 4;
Const.REC_MAIN_LUT_SELECT			= 5;
Const.REC_SUB_LUT_SELECT			= 6;
Const.EDIT_LOOK_LUT_SELECT			= 7;

// LOADRESULT画面表示内容判断用.
Const.USER_3D_LUT_LOAD_RESULT		= 0;
Const.ASC_CDL_LOAD_RESULT			= 1;
Const.ASC_CDL_ALL_LOAD_RESULT		= 2;
Const.ART_LOAD_RESULT				= 3;

// ART Information画面用
Const.ART_DESCRIPTION_MAX_LINE		= 5;
Const.ART_DESCRIPTION_MAX_CHAR		= 25;
Const.ART_OUTPUT_COLOR_SPACE_MAX_CHAR	= 24;
Const.ART_OUTPUT_RANGE_MAX_CHAR		= 8;

// 画面判断用.
Const.LUT_LOADFILEVIEW				= 0;
Const.LUT_FILETOLOADVIEW			= 1;
Const.ASCCDL_LOADVIEW				= 2;
Const.ART_FILETOLOADVIEW			= 3;

Const.LOOK_CATEGORY						= 'Category';
Const.PRESET_LOOK						= 'Preset Look';
Const.USER_3D_LUT						= 'User 3D LUT';
Const.ART								= 'ART';
Const.ART_LIKE							= 'ART-Like';
Const.ACES								= 'ACES';
Const.ACES_PROXY						= 'ACESproxy';
Const.ACES_CCT							= 'ACEScct';
Const.ACES_10_OUTPUT_REC709				= 'ACES 1.0 Output-Rec.709';
Const.ACES_10_OUTPUT					= 'ACES 1.0 Output';
Const.ACES_REC709						= '-Rec.709';
Const.ASC_CDL_PROCESS					= 'ASC CDL Process';
Const.ASC_CDL_SELECT					= 'ASC CDL Select';
Const.FILM_LIKE							= 'Film Like';
Const.C709_COLOR						= '709 Color';
Const.C800PCT_DRANGE					= '800% D-range';
Const.SGAMUT3							= 'S-Gamut3/';
Const.GAMMACATE_SLOG					= 'S-Log3';
Const.SGAMUT3_CINE						= 'S-Gamut3.Cine/';
Const.REC2020							= 'Rec.2020/';
Const.HLG_NATURAL						= 'HLG(Natural)';
Const.HLG_LIVE							= 'HLG(Live)';
Const.USER_GAMMA						= 'User Gamma';
Const.REC709							= 'Rec.709/';
Const.OUTPUTS							= 'Outputs';
Const.VF_RECORDING						= 'VF/Recording';
Const.SDI_1_2							= 'SDI 1/2';
Const.SDI_3_4							= 'SDI 3/4';
Const.SDR_GAIN							= 'SDR Gain';
Const.SDI_1_2_3_4						= 'SDI 1/2/3/4';
Const.MONITOR							= 'Monitor';
Const.HDMI								= 'HDMI';
Const.MONITOR_HDMI						= 'Monitor/HDMI';
Const.VIEWFINDER						= 'Viewfinder';
Const.SXS								= 'SxS';
Const.SXS_SUB							= 'SxS Sub';
Const.NOINFO							= '---';
Const.NO_OUTPUT							= '0x0';
Const.LOG								= 'Log';
Const.S709								= 's709';
Const.R709_800PCT 						= 'R709(800%)';
Const.R709_800PCT_NO_BRACKETS			= 'R709 800%';
Const.LOOK 								= 'Look';
Const.HLG								= 'HLG';
Const.HLG_NATURAL_PARENTHESES			= 'HLG(Natural)';
Const.HLG_NATURAL_FOR_SETTING			= 'HLG Natur';
Const.HLG_L								= 'HLG L';
Const.HLG_LIVE_PARENTHESES				= 'HLG(Live)';
Const.USER								= 'U.G.';
Const.USER_GAM							= 'User Gam.';
Const.USER_GAMMA_FOR_GUIDANCE			= 'User Gamma';
Const.R709_LIKE_FOR_DISP_HOME			= 'R709';
Const.R709_LIKE							= 'R709-Like';
Const.SG3_SLOG3							= 'S-Gamut3/SLog3';
Const.SG3_CINE_SLOG3					= 'S-Gamut3.Cine/SLog3';
Const.BT_2020_HLG_BT_2100				= 'BT.2020/HLG_BT.2100';
Const.BT_2020_HLG_LIVE					= 'Rec.2020/HLG_Live';
Const.BT_2020_USER_GAMMA				= 'Rec.2020/User_Gamma';
Const.BT_709_USER_GAMMA					= 'Rec.709/User_Gamma';
Const.PRESETLOOK_SAVONA					= 'PresetLook';
Const.USER3D_SAVONA						= 'User3D';
Const.ART_SAVONA						= 'ART';
Const.ACES_SAVONA						= 'ACESproxy';
Const.ACES_PROXY_SAVONA					= 'ACESproxy';
Const.ACES_CCT_SAVONA					= 'ACEScct';
Const.ACES_10_OUTPUT_REC709_SAVONA		= 'ACES_Rec.709';
Const.INPUT								= 'Input';
Const.COLOR_SPACE						= 'Color Space';
Const.FIXED_TO_LOG_IN					= 'fixed to Log in';
Const.CURRENT_OUTPUT_FORMAT				= 'current output format.';
Const.UNAVAILABLE_IN					= 'unavailable in';
Const.CURRENT_RECORDING_FORMAT			= 'current recording format.';
Const.FUNCTION_UNAVAILABLE				= 'Function unavailable while recording.';
Const.UNAVAILABLE_WHEN					= 'unavailable when';
Const.PAINT_CONTROL_IS_ON				= 'RM/RCP Paint Control (Technical Menu) is On.';
Const.JOINTDISABLE 						= 'JointDisable';
Const.LOCKED 							= 'Locked';
Const.UNLOCKED 							= 'Unlocked';
Const.OUTSIZE_HIGHT 					= 2160;
Const.OUTSIZE_WIDTH 					= 4096;
Const.CDL_OFF_SAVONA					= 'CDL_Off';
Const.CDL_OFF							= 'CDL Off';
Const.CDL_LOOK_SAVONA					= '1D_LUT_CDL_LOOK';
Const.CDL_LOOK							= 'CDL -> Look';
Const.LOOK_CDL_SAVONA					= '1D_LUT_LOOK_CDL';
Const.LOOK_CDL							= 'Look -> CDL';

Const.CDL_LOOK_FOR_DISPLAY				= '(CDL -> Look)';
Const.LOOK_CDL_FOR_DISPLAY				= '(Look -> CDL)';

Const.SET_CATEGORY						= 'SET_CATEGORY';
Const.SET_PRESET_LOOK					= 'SET_PRESET_LOOK';

Const.VAL_CATEGORY						= 'VAL_LOOK_CATEGORY';
Const.VAL_PRESET_LOOK					= 'VAL_PRESET_LOOK_SELECT';

Const.STR_LOAD_FILE_REQ					= 'Load File?';
Const.STR_SAVE_FILE_REQ					= 'Save File?';
Const.STR_RESET_FILE_REQ				= 'Reset File?';

Const.STR_RESET_FILE					= 'Reset File';
Const.STR_FILE_ACCESS					= 'File Access';
Const.STR_EXECUTING						= 'Executing…';
Const.STR_SUCCESSFULY_LOADED			= 'Successfully loaded';
Const.STR_ON_DESTINATION				= 'on destination';
Const.STR_ALL_FILES_SUCCESSFULLY_LOADED	= 'All files successfully loaded.';
Const.STR_CDL_CANNOT_ALL_LOAD			= 'Cannot load all files.';
Const.STR_CDL_CANNOT_LOAD				= 'Cannot load any more files.';
Const.EI_APPLIED						= 'EI applied';
Const.EI_NOT_APPLIED					= 'EI not applied';

Const.BUTTON_NAME_EXECUTE				= 'Execute';
Const.BUTTON_NAME_CANCEL				= 'Cancel';
Const.BUTTON_NAME_BACK					= 'Back';

Const.DONE								= 'Done';
Const.FAILED							= 'Failed';
Const.OK								= 'OK';
Const.NG								= 'NG';
Const.NOFILE							= 'No File';
Const.ART_NOFILE						= 'No File (s709)';
Const.NOT_SELECTED						= 'Not Selected';
Const.USER_LUT_FILE_NAME_LENGTH_MAX		= 64;
Const.LUT_INTERNAL_LIST_MAX 			= 16;
Const.LUT_EXTERNAL_LIST_MAX 			= 16;
Const.CDL_INTERNAL_LIST_MAX 			= 99;
Const.CDL_EXTERNAL_LIST_MAX 			= 99;

// Savona Value of LUT Select
Const.LOG_SAVONA						= 'Log';
Const.LOOK_SAVONA						= 'Look';
Const.HLG_NATURAL_SAVONA				= 'HLG';
Const.S709_SAVONA						= 's709';
Const.R709_800PCT_SAVONA				= 'R709_800%';
Const.HLG_LIVE_SAVONA					= 'HLG_Live';
Const.USER_GAMMA_SAVONA					= 'User_Gamma';
Const.R709_LIKE_SAVONA					= 'R709_Like';
Const.NOINFO_SAVONA						= 'None';

Const.BACKPAGE_2 			= 2;
Const.BACKPAGE_3 			= 3;
Const.BACKPAGE_4 			= 4;
Const.BACKPAGE_5 			= 5;

Const.LUT_SETTING_LIST1 = [ Const.LOG, Const.LOOK ];
Const.LUT_SETTING_LIST2 = [ Const.LOG, Const.S709, Const.R709_800PCT_NO_BRACKETS ];
//SDR Gain Setting List
Const.LUT_SDR_GAIN_SETTING_LIST = [ '0dB', '-1dB', '-2dB', '-3dB', '-4dB', '-5dB', '-6dB', '-7dB', '-8dB', '-9dB', '-10dB', '-11dB', '-12dB', '-13dB', '-14dB', '-15dB'];

// For BIG6LUT -> Edit Look -> CDL Information
Const.ASC_CDL_INFO_SavonaKey = 'LUT.CDL.Info.';

// For BIG6LUT -> Edit Look -> ART Information
Const.ART_INFO_SavonaKey = 'LUT.ART.Info.';

// MAIN_REC_TYPE_SELECT
Const.MAIN_REC_NONE         = 0;      //MAIN記録無し
Const.MAIN_REC_VALID        = 1;      //MAIN記録有り

// User Frame Line
Const.USER_BOX_MAX_WIDTH      = 480;
Const.USER_BOX_MIN_WIDTH      = -480;
Const.USER_BOX_MAX_HEIGHT     = 270;
Const.USER_BOX_MIN_HEIGHT     = -270;
Const.USER_FRAME_LINE_1       = 1;
Const.USER_FRAME_LINE_2       = 2;

// Paint Control.
Const.PAINT_CONTROL_VALUE_ON  = 1;
Const.PAINT_CONTROL_VALUE_OFF = 0;
Const.STR_CHANGE_PAINT_CONTROL_MSG_LINE1 = 'All settings will reset to factory defaults.';
Const.STR_CHANGE_PAINT_CONTROL_MSG_LINE2 = 'For backup, save to All File.';
Const.STR_CHANGE_PAINT_CONTROL_MSG_LINE3_OFF_ON = 'Off → On';
Const.STR_CHANGE_PAINT_CONTROL_MSG_LINE3_ON_OFF = 'On → Off';

// Information Page.
Const.INFORMATION_PAGE_CAMERA_CONDITION = 1;
Const.INFORMATION_PAGE_FIRMWARE         = 2;
Const.INFORMATION_PAGE_LICENSE          = 3;
Const.INFORMATION_PAGE_SYSTEM           = 4;
Const.INFORMATION_PAGE_BATTERY          = 5;
Const.INFORMATION_PAGE_MEDIA            = 6;
Const.INFORMATION_PAGE_LENS             = 7;
Const.INFORMATION_PAGE_NETWORK          = 8;
