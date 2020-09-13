(function (global, require) {
    'use strict';

    /**
     * baseUrl, paths는 js 파일의 위치가 기준은 아니고, 로드 되는 경로 에서 부터 기준이 된다.
     */
    var requireConfig = {
        urlArgs: "bust=" + (new Date()).getTime(),
        map: {
            '*': {'jquery': 'jquery-private'},
            'jquery-private': {'jquery': 'jquery'}
        },
        waitSeconds: 200,

        baseUrl: '/static/js/renewal',
        config: {
            text: {
                onXhr: function (xhr, url) {
                },
                onXhrComplete: function (xhr, url) {
                }
            }
        },

        paths: {
            // 절대 주소 설정
            factory: 'factory',
            message: 'message',

            // 라이브러리.
            jquery: 'lib/jquery.min', // jQuery 3.1.1
            jqueryMigrate: 'lib/jquery-migrate-3.0.0.min', // jQuery-migrate
            Mustache: 'lib/mustache.min',
            moment: 'lib/moment.min',
            tinyMCE: 'lib/tinymce/tinymce.min',
            lodash: 'lib/lodash.min',

            // Require 플러그인.
            text: 'lib/require.plugin/text',
            json: 'lib/require.plugin/json',

            // config
            configDomainAjax: 'config/config.domain.ajax',
            APIKEY: 'config/APIKEY',

            // jQuery 플러그인.
            jqueryUI: 'lib/jquery.plugin/jquery-ui/jquery-ui.min',
            jqueryEasing: 'lib/jquery.plugin/jquery.easing.1.3',
            jqueryTransit: 'lib/jquery.plugin/jquery.transit.min',
            jqueryPack: 'lib/jquery.plugin/jquery.pack',
            jqueryTouchSwipe: 'lib/jquery.plugin/jquery.touchSwipe',
            jquerySerializeObject: 'lib/jquery.plugin/jquery.serializeObject',
            jqueryCookie: 'lib/jquery.plugin/jquery.cookie.min',
            jqueryInputmask: "lib/jquery.plugin/jquery.inputmask.bundle.min",
            jqueryFreezeheader: 'lib/jquery.plugin/jquery.freezeheader', // 테이블 HEAD 고정
            jqueryPaging: 'lib/jquery.plugin/jquery.paging',
            modal: 'lib/jquery.simplemodal',

            // jQuery 버전충돌 문제로 이전 플러그인 로드. 이후 삭제해야 함.
            jquerySliderRolling: '/static/js/jquery-slider-rolling',

            // Vue
            vue: '/static/js/vue',
            vueSelect: '/static/js/vue-select-2.6.3',
            vueResource: '/static/js/vue-resource',
            vueHead: '/static/js/vue-head',
            vueInfiniteScroll: '/static/js/vue-infinite-scroll',
            vueInfiniteLoading: '/static/js/vue-infinite-loading',

            // 유틸리티.
            ImagePreload: 'module/utility/image.preload', // @Constructor
            imageOriginalSize: 'module/utility/image.originalsize',
            expiredTimer: 'module/utility/jquery.util.expiredTimer',
            HandlerExpiredTimer: 'module/ui/datetime/Handler.expired.timer', // @Constructor
            windowPopup: 'module/utility/window.popup',
            detectMobile: 'module/utility/util.detect.mobile',
            parseURL: 'module/utility/util.parseURL',
            purl: "lib/purl", // parse URL
            propSite: 'module/info.propSite', // 사이트 부가 정보.
            createGoogleShortUrl: 'module/utility/create.googleShortUrl',
            createKakaoShareButton: 'module/utility/create.kakaoshare.button',
            mapResizable: 'module/ui/responsive/jquery.util.mapresizable',
            copyToClipboard: 'module/utility/copy.clipboard',

            // UI 동작제어
            complexCarousel: 'module/ui/carousel/jquery.complexCarousel',
            simpleCarousel: 'module/ui/carousel/jquery.simpleCarousel',
            bxSlider: 'module/ui/carousel/jquery.bxslider',
            imageXzoom: 'module/ui/image.zoom/xzoom/xzoom.min', // 이미지 Zoom 기능
            imagePanzoom: 'module/ui/image.zoom/panzoom/jquery.panzoom.min', // 이미지 Zoom 기능

            // 하위 브라우저 호환 코드.
            polyfillDatalist: 'polyfill/datalist/datalist',
            polyfillPlaceholder: 'polyfill/jquery.placeholder/jquery.placeholder.min',
            polyfillPromise: 'polyfill/es6.promise/es6-promise.min',

            // Analytics 도구
            loaderDable: 'module/analytics/loader.dable',
            loaderGoogleAnalytics: 'module/analytics/loader.googleAnalytics',

            // 라이브러리 지역로딩
            'jquery-private': 'config/private.jquery'

        },
        shim: {
            mapResizable: {
                deps: ['jquery', 'imageOriginalSize', 'ImagePreload']
            },
            imageOriginalSize: {
                deps: ['jquery', 'ImagePreload']
            },
            complexCarousel: {
                deps: ['jquery', 'jqueryTouchSwipe', 'jqueryTransit']
            },
            simpleCarosel: {
                deps: ['jquery', 'jqueryTouchSwipe', 'jqueryTransit']
            },
            polyfillPlaceholder: {
                deps: ['jquery']
            },
            jqueryEasing: {
                deps: ['jquery']
            },
            jqueryCookie: {
                deps: ['jquery']
            },
            jqueryInputmask: {
                deps: ['jquery']
            },
            purl: {
                deps: ['jquery']
            },

            configDomainAjax: {
                deps: ['jquery']
            },
            loaderDable: { // dable 스크립트가 글로벌 변수를 더럽히고 있어서, dable 로딩이전에 js관련 작업을 모두 마쳐야함. 향후 데이블을 제거하길 기대함
                deps: ['jquery']
            },
            jquerySliderRolling: {
                deps: ['jquery']
            },
            jqueryFreezeheader: {
                deps: ['jquery']
            },
            HandlerExpiredTimer: {
                deps: ['jquery', 'expiredTimer']
            },
            'tinyMCE': { exports: 'tinyMCE'},
            'jquery-private': {
                deps: ['jquery']
            },
        }
    };

    global.requireModule = require.config(requireConfig);

    /**
     * body의 controller 속성값을 이용 해서, 최초 컨트롤러 함수를 실행함.
     * jquery에 Global 하게 주입 되어야 할 플러그인은 아래 부분에서 주입.
     */
    requireModule([
        'jquery',
//		'jqueryMigrate', 코드 개선 후 적용.
        'polyfillPromise',
        'jqueryCookie',
        'jquerySliderRolling',
        'jqueryEasing',
        'configDomainAjax',
        'jquerySerializeObject'
    ], function ($, polyfillPromise) {
        polyfillPromise.polyfill();
    });

    /**
     * jquery 버전 충돌로, 개선 이전 페이지를 위해서 플러그인을 로드함.
     */
    var body = document.getElementsByTagName('body')[0];
    if (body && body.getAttribute('controller')) {

        requireModule([
            'Mustache',
            'controller/global.controller',
            body.getAttribute('controller') + '/controller'
        ], function (Mustache, globalController, controller) {


            if (globalController) globalController();
            if (controller) controller();
        });
    }

    requireModule(['loaderGoogleAnalytics']);
    // requireModule(['loaderDable']);

})(window, require);
