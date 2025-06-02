import 'package:flutter_bloc/flutter_bloc.dart';

class PallindromeCubit extends Cubit<String> {
  PallindromeCubit() : super("Type number");

  void checkPalindrome(String input) {
    final cleaned = input.replaceAll(' ', '');

    final reversed = cleaned.split('').reversed.join('');
    if (cleaned == reversed) {
      emit("Yes, '$input' is a palindrome");
    } else {
      emit("No, '$input' is not a palindrome");
    }
  }
}
