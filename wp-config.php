<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'MekongKhmer' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'sn7IvgNShwWujXVADF2wyIZoHaEEIiHRG6dPU4ofIVEFAa7qGON1qtCGOnuAGMgF' );
define( 'SECURE_AUTH_KEY',  'DOoA5JSkOPkR45WvpN2mpRX2z4rI2fbI3JluN7p3bkgcFQH3o0yA3Uhu0yxgUcnq' );
define( 'LOGGED_IN_KEY',    'lOynDukDxhOifUs5qPIE5T6OWUv7w9EGc6ppL5x2Dl4aw3aQ3KA4ZUBYOfi5QMHM' );
define( 'NONCE_KEY',        'NbYC152fQt0XhZ6EPBYZzWwLYElQpqMR4yRdzv834wGz28CHbxqIDZpCwu6zhzW7' );
define( 'AUTH_SALT',        'cSIIBm3r2mIqLDgYly9ALeLZF9BroiAA64TYz6kNuYhPHFkjsDYqsmRyJREtlVpa' );
define( 'SECURE_AUTH_SALT', 'KJaaaTgHuxeS7nBq7y53HTXudjMVDaIWbYXjzlubUdtWs4pwqYLvQxJhaojlQSNn' );
define( 'LOGGED_IN_SALT',   'nfjLxIbm42xwZyq8Lm7dUjkI6KwzMsbK7SqHlu3NmbIc4XfYf2Qx4sZH7McNIiXP' );
define( 'NONCE_SALT',       'gdwZvlGV7poxNHkqtQ7JsAZEsphq2zF5J9IIG6kuOlDAoKYuwILQsCsje5GlLcBX' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
