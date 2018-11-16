from django.utils import translation

class TranslatedField:
    def __init__(self, en_field, es_field):
        self.en_field = en_field
        self.es_field = es_field
        print(en_field)
        print(es_field)

    def __get__(self, instance, owner):
        print(translation.get_language())
        print(self.en_field)
        print(self.es_field)
        if translation.get_language() == 'es':
            print(self.es_field)
            return getattr(instance, self.es_field)
        else:
            return getattr(instance, self.en_field)
