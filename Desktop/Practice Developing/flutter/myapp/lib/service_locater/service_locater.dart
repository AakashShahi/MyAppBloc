import 'package:get_it/get_it.dart';
import 'package:myapp/cubit/dashboard_cubit.dart';
import 'package:myapp/cubit/pallindrome_cubit.dart';
import 'package:myapp/cubit/simple_interest_cubit.dart';

final serviceLocater = GetIt.instance;
Future<void> initDependencies() async {
  _initBloc();
}

void _initBloc() {
  serviceLocater.registerFactory<PallindromeCubit>(() => PallindromeCubit());
  serviceLocater.registerFactory<SimpleInterestCubit>(
    () => SimpleInterestCubit(),
  );
  serviceLocater.registerLazySingleton<DashboardCubit>(
    () => DashboardCubit(
      serviceLocater(),
      serviceLocater(),
    ), // auto assigns cubit
  );
}
