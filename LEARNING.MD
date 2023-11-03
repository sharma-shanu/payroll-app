Dependency Management Question in a MONOREPO setup

Lets say I have trpc and tailwind packages. The way these packages are set up is they themselve do not generate or run (be it the backend or the compiled components) rather they are run by the app using them, Q- then where should trpc or tailwind dependency should be in ? packages or apps using them.

My answer is apps since they will be ultimately running these packages BUT Documenso does it the other way that is trpc is dependency of packages/trpc