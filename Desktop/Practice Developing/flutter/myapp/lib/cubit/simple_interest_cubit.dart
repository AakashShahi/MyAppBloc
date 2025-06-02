import 'package:flutter_bloc/flutter_bloc.dart';

class SimpleInterestCubit extends Cubit<double> {
  SimpleInterestCubit() : super(0);

  void calculateSimple(double p, double t, double r) {
    emit((p * t * r) / 100);
  }
}
