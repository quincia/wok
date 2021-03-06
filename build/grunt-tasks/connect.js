/**
 * Standalone Static Server
 * ===============================
 */
/*jshint node:true */
module.exports = {
    options: {
        hostname: '*',
        port: '<%= hosts.devbox.ports.connect %>',
        useAvailablePort: true,
        base: ['<%= paths.dist.root %>', '<%= paths.dist.views %>'],
        middleware: function (connect, options, middlewares) {

            if (require.resolve('../api.js')) {
                var app = require('../api.js')(connect, options);
                middlewares.unshift(app);
            }
            return middlewares;
        }
    },
    server: {
        options: {
            keepalive: true
        }
    },
    dev: {
        options: {
            open: true
        }
    }
};