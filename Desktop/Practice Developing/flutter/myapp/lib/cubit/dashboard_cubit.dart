import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:myapp/cubit/pallindrome_cubit.dart';
import 'package:myapp/cubit/simple_interest_cubit.dart';
import 'package:myapp/view/pallindrome_view.dart';
import 'package:myapp/view/simple_interest_view.dart';

class DashboardCubit extends Cubit<void> {
  DashboardCubit(this._pallindromeCubit, this._simpleInterestCubit)
    : super(null);

  final PallindromeCubit _pallindromeCubit;
  final SimpleInterestCubit _simpleInterestCubit;

  void openPallindromeView(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => BlocProvider.value(
          value: _pallindromeCubit,
          child: PallindromeView(),
        ),
      ),
    );
  }

  void openSimpleInterest(BuildContext context) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => BlocProvider.value(
          value: _simpleInterestCubit,
          child: SimpleInterestView(),
        ),
      ),
    );
  }
}
