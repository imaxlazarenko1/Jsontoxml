    importScripts('https://www.gstatic.com/firebasejs/12.8.0/firebase-app-compat.js');
    importScripts('https://www.gstatic.com/firebasejs/12.8.0/firebase-messaging-compat.js');

    // "Обобщенная" конфигурация Firebase, не содержащая секретных данных
    // Важно: здесь не должно быть вашего apiKey!
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY_HERE", // Только для того, чтобы инициализировать app, если Service Worker будет использоваться вне основного сайта. В большинстве случаев этот ключ не нужен здесь
      projectId: "eidos-push-notifications",
      messagingSenderId: "803790504785",
      appId: "1:803790504785:web:bab0b4933aad016d24c970",
    };

    firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      console.log('[firebase-messaging-sw.js] Received background message ', payload);
      // Customize notification here
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // Укажите путь к иконке
      };

      self.registration.showNotification(notificationTitle, notificationOptions);
    });
    ```
