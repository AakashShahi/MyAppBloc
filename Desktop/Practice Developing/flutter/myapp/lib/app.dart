import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myapp/cubit/splash_cubit.dart';
import 'package:myapp/view/splash_cubit_view.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => SplashCubit(),
      child: MaterialApp(home: SplashView(), debugShowCheckedModeBanner: false),
    );
  }
}
