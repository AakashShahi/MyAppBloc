import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myapp/cubit/dashboard_cubit.dart';
import 'package:myapp/service_locater/service_locater.dart';
import 'package:myapp/view/dashboard_cubit_view.dart';

class SplashCubit extends Cubit<void> {
  SplashCubit() : super(null);

  void openDashboard(BuildContext context) {
    Future.delayed(const Duration(seconds: 2), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => BlocProvider.value(
            value: serviceLocater<DashboardCubit>(),
            child: DashboardCubitView(),
          ),
        ),
      );
    });
  }
}
