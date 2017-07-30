System.register(['@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1, Observable_1;
    var MockXHRBackend;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            MockXHRBackend = (function () {
                function MockXHRBackend() {
                    this._mediaItems = [
                        {
                            id: 1,
                            name: "Foxlife",
                            medium: "Series",
                            category: "Science Fiction",
                            year: 2010,
                            watchedOn: 1294166565384,
                            isFavorite: false
                        },
                        {
                            id: 2,
                            name: "BigBoss",
                            medium: "Movies",
                            category: "Comedy",
                            year: 2015,
                            watchedOn: null,
                            isFavorite: true
                         },
                        {
                            id: 3,
                            name: "Friends",
                            medium: "Comedy",
                            category: "Series",
                            year: 2010,
                            watchedOn: 1294166565384,
                            isFavorite: false
                        },
                        {
                            id: 4,
                            name: "BigLove",
                            medium: "Movies",
                            category: "Comedy",
                            year: 2015,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 5,
                            name: "Farmers",
                            medium: "Movies",
                            category: "Action",
                            year: 2016,
                            watchedOn: null,
                            isFavorite: false
                        }, {
                            id: 6,
                            name: "Dana",
                            medium: "Series",
                            category: "Drama",
                            year: null,
                            watchedOn: null,
                            isFavorite: true
                        }, {
                            id: 7,
                            name: "World",
                            medium: "Movies",
                            category: "Action",
                            year: 2017,
                            watchedOn: 1457166565384,
                            isFavorite: false

                        }, {
                            id: 8,
                            name: "Titanic",
                            medium: "Movies",
                            category: "Romance",
                            year: 2012,
                            watchedOn: 1457166565384,
                            isFavorite: false

                        }, {
                            id: 9,
                            name: "Wash-Life",
                            medium: "Movies",
                            category: "Action",
                            year: 2014,
                            watchedOn: 1457166565384,
                            isFavorite: false

                        }, {
                            id: 10,
                            name: "LioneHood",
                            medium: "Movies",
                            category: "Action",
                            year: 2015,
                            watchedOn: 1457166565384,
                            isFavorite: false

                        }, {
                            id: 11,
                            name: "Star War",
                            medium: "Movies",
                            category: "Action",
                            year: 2015,
                            watchedOn: 1457166565384,
                            isFavorite: false

                        }, {
                            id: 12,
                            name: "World",
                            medium: "Series",
                            category: "Action",
                            year: 2017,
                            watchedOn: 1457166565384,
                            isFavorite: false

                        }, {
                            id: 13,
                            name: "24Hours",
                            medium: "Series",
                            category: "Action",
                            year: 2010,
                            watchedOn: 1457166565384,
                            isFavorite: false
                        }
                    ];
                }
                MockXHRBackend.prototype.createConnection = function (request) {
                    var _this = this;
                    var response = new Observable_1.Observable(function (responseObserver) {
                        var responseOptions;
                        switch (request.method) {
                            case http_1.RequestMethod.Get:
                                if (request.url.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
                                    var medium;
                                    if (request.url.indexOf('?') >= 0) {
                                        medium = request.url.split('=')[1];
                                        if (medium === 'undefined')
                                            medium = '';
                                    }
                                    var mediaItems;
                                    if (medium) {
                                        mediaItems = _this._mediaItems.filter(function (mediaItem) { return mediaItem.medium === medium; });
                                    }
                                    else {
                                        mediaItems = _this._mediaItems;
                                    }
                                    responseOptions = new http_1.ResponseOptions({
                                        body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
                                        status: 200
                                    });
                                }
                                else {
                                    var id = parseInt(request.url.split('/')[1]);
                                    mediaItems = _this._mediaItems.filter(function (mediaItem) { return mediaItem.id === id; });
                                    responseOptions = new http_1.ResponseOptions({
                                        body: JSON.parse(JSON.stringify(mediaItems[0])),
                                        status: 200
                                    });
                                }
                                break;
                            case http_1.RequestMethod.Post:
                                var mediaItem = JSON.parse(request.text().toString());
                                mediaItem.id = _this._getNewId();
                                _this._mediaItems.push(mediaItem);
                                responseOptions = new http_1.ResponseOptions({ status: 201 });
                                break;
                            case http_1.RequestMethod.Delete:
                                var id = parseInt(request.url.split('/')[1]);
                                _this._deleteMediaItem(id);
                                responseOptions = new http_1.ResponseOptions({ status: 200 });
                        }
                        var responseObject = new http_1.Response(responseOptions);
                        responseObserver.next(responseObject);
                        responseObserver.complete();
                        return function () { };
                    });
                    return { response: response };
                };
                MockXHRBackend.prototype._deleteMediaItem = function (id) {
                    var mediaItem = this._mediaItems.find(function (mediaItem) { return mediaItem.id === id; });
                    var index = this._mediaItems.indexOf(mediaItem);
                    if (index >= 0) {
                        this._mediaItems.splice(index, 1);
                    }
                };
                MockXHRBackend.prototype._getNewId = function () {
                    if (this._mediaItems.length > 0) {
                        return Math.max.apply(Math, this._mediaItems.map(function (mediaItem) { return mediaItem.id; })) + 1;
                    }
                    else {
                        return 1;
                    }
                };
                return MockXHRBackend;
            }());
            exports_1("MockXHRBackend", MockXHRBackend);
        }
    }
});
//# sourceMappingURL=mock-xhr-backend.js.map
