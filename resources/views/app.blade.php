<!DOCTYPE html>
<html class="dark" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>Stitch Design</title>

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <script>
            tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        colors: {
                            primary: "#1773cf",
                            "background-light": "#f6f7f8",
                            "background-dark": "#111921",
                        },
                        fontFamily: {
                            display: ["Inter"],
                        },
                        borderRadius: { 
                            DEFAULT: "0.25rem", 
                            lg: "0.5rem", 
                            xl: "0.75rem", 
                            full: "9999px" 
                        },
                    },
                },
            };
        </script>
        <style>
            .form-input, .form-textarea {
                --tw-ring-color: transparent !important;
                --tw-ring-offset-shadow: none !important;
                --tw-ring-shadow: none !important;
                --tw-shadow: none !important;
                --tw-shadow-colored: none !important;
            }
        </style>

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="bg-background-light dark:bg-background-dark font-display text-slate-800 dark:text-slate-200">
        @inertia
    </body>
</html>
