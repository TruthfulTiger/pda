<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0dcd4d6c81ef26958a440d017fca3c0e
{
    public static $files = array (
        '45e8c92354af155465588409ef796dbc' => __DIR__ . '/..' . '/bcosca/fatfree/lib/base.php',
    );

    public static $classMap = array (
        'Assets' => __DIR__ . '/..' . '/ikkez/f3-assets/lib/assets.php',
        'Mailer' => __DIR__ . '/..' . '/ikkez/f3-mailer/mailer.php',
        'PayPal' => __DIR__ . '/..' . '/kreative/f3-pypl/lib/PayPal.php',
        'PayPalRP' => __DIR__ . '/..' . '/kreative/f3-pypl/lib/PayPalRP.php',
        'PayPalRT' => __DIR__ . '/..' . '/kreative/f3-pypl/lib/PayPalRT.php',
        'Validate' => __DIR__ . '/..' . '/geofmureithi/f3-validate/lib/validate.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit0dcd4d6c81ef26958a440d017fca3c0e::$classMap;

        }, null, ClassLoader::class);
    }
}
