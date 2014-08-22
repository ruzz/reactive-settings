Package.describe({
    summary: "a reactive settings class based off reactive variables (and reactive variable manager)"
});

Package.on_use(function (api, where) {
    api.add_files('reactive-settings.js', ['client', 'server']);
});

Package.on_test(function (api) {
    api.use('reactive-settings');
});
