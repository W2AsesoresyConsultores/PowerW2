import React from 'react'

function FooterDicar() {
  return (
    <footer class="bg-gray-500 text-white py-4 px-3 mt-16">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
        <img
            src="https://elcuvegbwtlngranjtym.supabase.co/storage/v1/object/public/Page_empresas/footer/cropped-logo-dicar.png"
            alt="Dicar Logo"
            className="w-40"
          />
        </div>
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                <li class="mx-4"><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Terms of Use</a></li>
            </ul>
        </div>
    </div>
</footer>
  )
}

export default FooterDicar